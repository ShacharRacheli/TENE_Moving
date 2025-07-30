using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.Models;

namespace Share.Helper
{
    public class Jwt
    {
        private const string SecretKey = "ThisisaverylongsecretkeyJWT123456";
        //private readonly IConfiguration _configuration;
        //public Jwt(IConfiguration configuration)
        //{
        //    _configuration = configuration;
        //}
        public static string GenerateJwtToken(AdminLogin admin)
        {
            //var issuer = _configuration["JWT:Issuer"];
            //var audience = _configuration["JWT:Audience"];
            //var key = Encoding.ASCII.GetBytes(_configuration["JWT:Key"]);
            var key = Encoding.ASCII.GetBytes(SecretKey);

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                new Claim(ClaimTypes.Email, admin.Email)
            }),
                Expires = DateTime.UtcNow.AddHours(4),
                Issuer = "https://http://localhost:5180",
                Audience = "https://http://localhost:5180",
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
