
using Comp.Core.IServices;
using Comp.Service.Services;
using Tene.Core;
using Tene.Core.IRepositories;
using Tene.Core.IServices;
using Tene.Data;
using Tene.Data.Repositories;
using Tene.Service.Services;

namespace Tene
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddScoped<IRequestRepository, RequestRepository>();
            builder.Services.AddScoped<IRequestService, RequestService>();
            builder.Services.AddScoped<IEmailService, EmailService>();
            builder.Services.AddScoped<IAdminRepository, AdminRepository>();
            builder.Services.AddScoped<IAdminService, AdminService>();
            builder.Services.AddDbContext<DataContext>();
            builder.Services.AddAutoMapper(typeof(MappingProfile));
            builder.Services.AddCors();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors(policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
