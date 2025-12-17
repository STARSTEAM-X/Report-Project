namespace MyWebApi.Models;
using System.ComponentModel.DataAnnotations.Schema;

[Table("users")]
public class User
{
    public int Id { get; set; }
    public string Email { get; set; } = null!;
    public string PasswordHash { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
}