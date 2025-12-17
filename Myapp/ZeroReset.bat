del /Q /S Migrations\*
@REM dotnet ef database drop --force --verbose
dotnet ef migrations add initialCreate
dotnet ef database update
dotnet run