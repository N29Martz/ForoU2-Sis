using System.ComponentModel.DataAnnotations;

namespace BackendForo.Dtos
{
    public class PhotoDto
    {
        public int Id { get; set; }

        [Display(Name = "url")]
        [Required(ErrorMessage = "El {0} es Requerido")]
        public string? URL { get; set; }

        public DateTime UploadedAt { get; set; }
    }
}
