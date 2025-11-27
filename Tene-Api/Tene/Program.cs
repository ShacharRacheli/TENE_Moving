using Microsoft.EntityFrameworkCore;
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
            builder.Services.AddScoped<IProductRepository, ProductRepository>();
            builder.Services.AddScoped<IProductService, ProductService>();
            //builder.Services.AddDbContext<DataContext>();
            builder.Services.AddDbContext<DataContext>(options =>
//options.UseMySql(builder.Configuration["ConnectionStrings:DefaultConnection"],
options.UseMySql(Environment.GetEnvironmentVariable("CONNECTION_STRING"),
new MySqlServerVersion(new Version(8, 0, 41))));

            builder.Services.AddAutoMapper(typeof(MappingProfile));

            //builder.Services.AddCors();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("RenderPolicy", policy =>
                {
                    policy.WithOrigins("https://tene-moving.onrender.com")
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            //app.UseCors(policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            app.UseCors("RenderPolicy");

            app.Use(async (context, next) =>
            {
                if (context.Request.Method == "OPTIONS")
                {
                    context.Response.StatusCode = 200;
                    await context.Response.CompleteAsync();
                    return;
                }
                await next();
            });

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers();

            //app.UseAuthorization();


            //app.MapControllers();

            app.Run();
        }
    }
}
