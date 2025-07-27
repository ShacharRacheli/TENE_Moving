using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Tene.Core.DTOs;
using Tene.Core.IServices;
using Tene.Core.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Tene.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService _adminService;
        private readonly IMapper _mapper;

        public AdminController(IAdminService adminService, IMapper mapper)
        {
            _adminService = adminService;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductDetailsDTO>>> GetAllProducts()
        {
            var products = await _adminService.GetAllProductsAsync();

            var productDtos = _mapper.Map<IEnumerable<ProductDetailsDTO>>(products);

            return Ok(productDtos);
        }

        [HttpPost]
        public async Task<IActionResult> AddNewProduct([FromBody] ProductDetailsDTO dto)
        {
            if (dto == null) return BadRequest();

            var product = _mapper.Map<ProductDetails>(dto);

            if (await _adminService.AddNewProductAsync(product))
                return Ok();
            return BadRequest();////////////??????????????????????
        }

    }
}
