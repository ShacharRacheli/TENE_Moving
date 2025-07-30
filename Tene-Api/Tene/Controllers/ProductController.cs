using Microsoft.AspNetCore.Mvc;
using Tene.Core.DTOs;
using Tene.Core.IServices;
using Tene.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Tene.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }
        [HttpGet("products-by-category")]
        public async Task<ActionResult<IEnumerable<CategoryWithProductsDTO>>> GetProductsGroupedByCategory()
        {
            var categories = await _productService.GetCategoriesWithProductsAsync();
            return Ok(categories);
        }

    }
}
