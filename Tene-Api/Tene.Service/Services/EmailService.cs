using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.IServices;

namespace Tene.Service.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;
        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        //     public async Task SendEmailAsync(string to, string subject, string body)
        //     {
        //         try
        //         {
        //             //var smtpServer = Environment.GetEnvironmentVariable("SMTP_SERVER");
        //             //var port = int.Parse(Environment.GetEnvironmentVariable("EMAIL_PORT"));
        //             //var senderEmail = Environment.GetEnvironmentVariable("SENDER_EMAIL");
        //             //var senderPassword = Environment.GetEnvironmentVariable("SENDER_PASSWORD");
        //             var smtpServer = _configuration.GetSection("EmailSettings:SmtpServer");
        //             var port = int.Parse(_configuration.GetSection("EmailSettings:Port"));
        //             var senderEmail = _configuration.GetSection("EmailSettings:SenderEmail");
        //             var senderPassword = _configuration.GetSection("EmailSettings:SenderPassword");

        //             using var smtp = new SmtpClient(_configuration.GetSection("EmailSettings:SmtpServer"))
        //             {
        //                 Port = 587,
        //                 Credentials = new System.Net.NetworkCredential(senderEmail, senderPassword),
        //                 EnableSsl = true
        //             };
        //             var mail = new MailMessage
        //             {
        //                 From = new MailAddress(senderEmail),
        //                 Subject = subject,
        //                 Body = body,
        //                 IsBodyHtml = true
        //             };
        //             mail.To.Add(to);
        //             await smtp.SendMailAsync(mail);
        //         }
        //         catch (Exception ex)
        //         {
        //             Console.WriteLine($"Failed to send email: {ex.Message}");
        //         }
        //     }
        // }
        public async Task SendEmailAsync(string to, string subject, string body)
        {
            try
            {
                //var smtpServer = _configuration["EmailSettings:SmtpServer"];
                //var port = int.Parse(_configuration["EmailSettings:Port"]);
                //var senderEmail = _configuration["EmailSettings:SenderEmail"];
                //var senderPassword = _configuration["EmailSettings:SenderPassword"];
                var smtpServer = Environment.GetEnvironmentVariable("SMTP_SERVER");
                var port = int.Parse(Environment.GetEnvironmentVariable("PORT"));
                var senderEmail = Environment.GetEnvironmentVariable("SENDER_EMAIL");
                var senderPassword = Environment.GetEnvironmentVariable("SENDER_PASSWORD");
                using var smtp = new SmtpClient("smtp.gmail.com")
                {
                    Port = 587,
                    EnableSsl = true,
                    UseDefaultCredentials = false,
                    Credentials = new NetworkCredential("hovalotin@gmail.com", "qekp zkxj ehvt ucsg")
                };

                //using var smtp = new SmtpClient(smtpServer)
                //{
                //    Port = port,
                //    Credentials = new System.Net.NetworkCredential(senderEmail, senderPassword),
                //    UseDefaultCredentials = false, // Important!
                //    EnableSsl = true
                //};

                var mail = new MailMessage
                {
                    From = new MailAddress("hovalotin@gmail.com"),
                    Subject = subject,
                    Body = body,
                    IsBodyHtml = true
                };
                mail.To.Add(to);
                await smtp.SendMailAsync(mail);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to send email: {ex.Message}");
            }
        }
    }
}
