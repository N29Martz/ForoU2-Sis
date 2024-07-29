using System.ComponentModel.DataAnnotations;

namespace BackendForo.Dtos
{
    public class PhotoCreateDto
    {
        [Required]
        public IFormFile File { get; set; }
    }
}
