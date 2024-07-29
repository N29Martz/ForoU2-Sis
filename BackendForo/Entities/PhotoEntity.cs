using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendForo.Entities
{
    public class PhotoEntity
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("url")]
        public string? URL { get; set; }

        [Required]
        [Column("uploadedAt")]
        public DateTime UploadedAt { get; set; }
    }
}
