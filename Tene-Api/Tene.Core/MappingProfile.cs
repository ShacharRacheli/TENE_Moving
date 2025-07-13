using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.DTOs;
using Tene.Core.Models;

namespace Tene.Core
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {

            CreateMap<RequestDetailsDTO, RequestDetails>().ReverseMap();
            CreateMap<ProductsDTO, Products>().ReverseMap();
        }
    }
}
