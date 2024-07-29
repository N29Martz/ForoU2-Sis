using AutoMapper;
using BackendForo.Database;
using BackendForo.Dtos;
using BackendForo.Entities;
using BackendForo.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BackendForo.Controllers
{
    [Route("api/cloudinary")]
    [ApiController]
    public class CloudinaryController : ControllerBase
    {
        private readonly ICloudinaryService _cloudinaryService;
        private readonly PhotoDbContext _context;
        private readonly IMapper _mapper;

        public CloudinaryController(ICloudinaryService cloudinaryService, PhotoDbContext context, IMapper mapper)
        {
            _cloudinaryService = cloudinaryService;
            _context = context;
            _mapper = mapper;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage([FromForm] PhotoCreateDto photoCreateDto)
        {
            var result = await _cloudinaryService.UploadImageAsync(photoCreateDto.File);
            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetImages()
        {
            var images = await _cloudinaryService.GetImagesAsync();
            var imageDtos = _mapper.Map<List<PhotoDto>>(images);
            return Ok(imageDtos);
        }
    }
}