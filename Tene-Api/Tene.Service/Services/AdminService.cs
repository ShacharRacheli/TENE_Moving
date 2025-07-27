using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.DTOs;
using Tene.Core.IRepositories;
using Tene.Core.IServices;
using Tene.Core.Models;

namespace Tene.Service.Services
{
    public class AdminService : IAdminService
    {
        private readonly IAdminRepository _adminRepository;

        public AdminService(IAdminRepository adminRepository)
        {
            _adminRepository = adminRepository;
        }

        public async Task<IEnumerable<ProductDetailsDTO>> GetAllProductsAsync()
        {
            var products =await _adminRepository.GetAllProductsWithCategoryAsync();

            return products.Select(p => new ProductDetailsDTO
            {
                ProductName = p.ProductName,
                Cob = p.Cob,
                CategoryName = p.Category.CategoryName
            });
        }

        public async Task<bool> AddNewProductAsync(ProductDetails product)
        {
            return await _adminRepository.AddProductAsync(product);
        }
    }
}
