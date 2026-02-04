using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using MyWebApi.Database;
using MyWebApi.Models;

namespace MyWebApi.Controllers;

[ApiController] 
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _config;
    private readonly AppDbContext _db;

    public AuthController(IConfiguration config, AppDbContext db)
    {
        _config = config;
        _db = db;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] TokenDto dto)
    {
        var handler = new JwtSecurityTokenHandler();
        var jwt = handler.ReadJwtToken(dto.Token);

        var email = jwt.Claims.First(x => x.Type == "email").Value;

        var allowed = _config["Auth:AllowedDomain"];

        if (!email.EndsWith(allowed))
            return Unauthorized("Invalid domain");

        var user = await _db.Users.FirstOrDefaultAsync(x => x.Email == email);

        if (user == null)
        {
            user = new User
            {
                Email = email,
                Role = "User"
            };

            _db.Users.Add(user);
            await _db.SaveChangesAsync();
        }

        return Ok(new { role = user.Role });
    }
}