using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.DTOs;
using Tene.Core.IRepositories;
using Tene.Core.IServices;

namespace Tene.Service.Services
{
    public class ProductService:IProductService 
    {
        private readonly IProductRepository _productRepository;
        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public async Task<IEnumerable<CategoryWithProductsDTO>> GetCategoriesWithProductsAsync()
        {
            var categories = await _productRepository.GetAllCategoriesWithProductsAsync();

            var result = categories.Select(c => new CategoryWithProductsDTO
            {
                Id = c.Id,
                CategoryName = c.CategoryName,
                Products = c.Products.Select(p => new ProductDTO
                {
                    Id = p.Id,
                    ProductName = p.ProductName,
                }).ToList()
            });

            return result;
        }

    }
}
