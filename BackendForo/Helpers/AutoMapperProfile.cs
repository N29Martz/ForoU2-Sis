using AutoMapper;
using BackendForo.Dtos;
using BackendForo.Entities;

namespace BackendForo.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile() {
            CreateMap<PhotoDto, PhotoEntity>();
            CreateMap<PhotoEntity, PhotoDto>();
            CreateMap<PhotoCreateDto, PhotoEntity>();
        }
    }
}
