using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.Models;

namespace Tene.Data
{
    public class DataContext:DbContext
    {
        public DbSet<RequestDetails> RequestsDetails { get; set; }
        public DbSet<ProductsFromUser> ProductsFromUser { get; set; } // Add Products DbSet
        public DbSet<ProductDetails> ProductsDetails { get; set; } // Add Products DbSet
        public DbSet<Category> Category { get; set; } // Add Products DbSet
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductsFromUser>()
                .HasOne(p => p.RequestDetails)
                .WithMany(rd => rd.Products)
                .HasForeignKey(p => p.RequestDetailsId);

            base.OnModelCreating(modelBuilder);
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=Tene");
            //optionsBuilder.UseMySql("server=localhost;database=competition;user=root;password=Rs0583237001",
            //    new MySqlServerVersion(new Version(8, 0, 21))); 
        }
    }
}
