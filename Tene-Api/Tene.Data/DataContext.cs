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
        public DbSet<Products> Products { get; set; } // Add Products DbSet
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Products>()
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
