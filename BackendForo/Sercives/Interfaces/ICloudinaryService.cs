using BackendForo.Entities;
using Microsoft.AspNetCore.Http; 

namespace BackendForo.Services.Interfaces
{
    public interface ICloudinaryService
    {
        Task<string> UploadImageAsync(IFormFile file);
        Task<List<PhotoEntity>> GetImagesAsync();
    }
}