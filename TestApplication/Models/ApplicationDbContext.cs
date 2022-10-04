using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TestApplication.Models;
using TestApplication.Models2;

namespace TestApplication.Authentication
{
    public class ApplicationDbContext:IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
        {

        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        //protected override void OnModelCreating(ModelBuilder builder)
        //{
        //    base.OnModelCreating(builder);
        //}
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("Server=ec2-34-200-205-45.compute-1.amazonaws.com;Port=5432;Database=deofdluj5s3lb8;User Id=piumpedtmtymrt;Password=370b788bdac7166288d9827d37d84fa1f4bdadac155849639115a5b7f01e8fec;sslmode=Require;TrustServerCertificate=True;");
            }
        }
        public DbSet<RegisterModel> RegisterModels { get; set; }
        public DbSet<LoginModel> LoginModels { get; set; }
        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Employee> Employees { get; set; }

    }
}
