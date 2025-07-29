using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Share.Helper;
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

        [HttpPost("login")]
        public async Task<ActionResult> LoginAdmin([FromBody] AdminLogin admin)
        {
            if (admin.Email == "r@r" && admin.Password == "12345")
            {
                var token = Jwt.GenerateJwtToken(admin);
                return Ok(new { token });
            }
            return Unauthorized("Invalid credentials");
        }
        [HttpGet] 
        public async Task<ActionResult<IEnumerable<ProductDetailsDTO>>> GetAllProducts()
        {
            var products = await _adminService.GetAllProductsAsync();

            //var productDtos = _mapper.Map<IEnumerable<ProductDetailsDTO>>(products);

            return Ok(products);
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

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, [FromBody] ProductDetailsUpdateAddDTO dto)
        {
            Console.WriteLine($"Received: {dto.ProductName}, {dto.Cob}, {dto.CategoryId}");

            var product = await _adminService.GetByIdAsync(id);
            if (product == null) return NotFound();
            var productToUpdate = _mapper.Map<ProductDetails>(dto);
            productToUpdate.Id = id;
            //product.ProductName = dto.ProductName;
            //product.Cob = dto.Cob;
            //product.CategoryId = dto.CategoryId;


            if (await _adminService.UpdateProductAsync(id,productToUpdate))
            {
                Console.WriteLine("Update success");
                return Ok(); }
            Console.WriteLine("Update failed");

            return BadRequest();
        }
        [HttpGet("categories")]
        public async Task<ActionResult<IEnumerable<CategoryDTO>>> GetAllCategories()
        {
            var categories = await _adminService.GetAllCategoriesAsync();
            var categoriesDto = _mapper.Map<IEnumerable<CategoryDTO>>(categories);

            return Ok(categoriesDto);
        }
        [HttpPost("addCategory")]
        public async Task<ActionResult> AddCategory([FromBody] string category)
        {
           if( await _adminService.AddNewCategoryAsync(category))
                return Ok();
           return BadRequest();
        }

    }
}
