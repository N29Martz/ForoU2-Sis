using BackendForo.Entities;
using Microsoft.EntityFrameworkCore;

namespace BackendForo.Database
{
    public class PhotoDbContext : DbContext
    {
        public PhotoDbContext(DbContextOptions<PhotoDbContext> options) : base(options) { }

        public DbSet<PhotoEntity> Photos { get; set; }
    }
}
