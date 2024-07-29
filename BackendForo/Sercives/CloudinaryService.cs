using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.EntityFrameworkCore;
using BackendForo.Entities;
using BackendForo.Database;
using Microsoft.AspNetCore.Http;
using BackendForo.Services.Interfaces;

namespace BackendForo.Services
{
    public class CloudinaryService : ICloudinaryService
    {
        private readonly PhotoDbContext _context;
        private readonly Cloudinary _cloudinary;

        public CloudinaryService(PhotoDbContext context, Cloudinary cloudinary)
        {
            _context = context;
            _cloudinary = cloudinary;
        }

        public async Task<string> UploadImageAsync(IFormFile file)
        {
            if (file == null || file.Length == 0)
                throw new ArgumentException("No file uploaded");

            using var stream = file.OpenReadStream();
            var uploadParams = new ImageUploadParams
            {
                File = new FileDescription(file.FileName, stream)
            };

            var uploadResult = await _cloudinary.UploadAsync(uploadParams);

            var photo = new PhotoEntity
            {
                URL = uploadResult.SecureUrl.ToString(),
                UploadedAt = DateTime.UtcNow
            };

            _context.Photos.Add(photo);
            await _context.SaveChangesAsync();

            return photo.URL;
        }

        public async Task<List<PhotoEntity>> GetImagesAsync()
        {
            return await _context.Photos.OrderByDescending(i => i.UploadedAt).ToListAsync();
        }
    }
}