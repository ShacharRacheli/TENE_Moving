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
                CategoryId = p.CategoryId
            });
        }

        public async Task<bool> AddNewProductAsync(ProductDetails product)
        {
            return await _adminRepository.AddProductAsync(product);
        }

        //////////////////////////
        ///
        public async Task<ProductDetails> GetByIdAsync(int id)
        {
            return await _adminRepository.GetByIdAsync(id);
        }

        public async Task<bool> UpdateProductAsync(ProductDetails product)
        {
            return await _adminRepository.UpdateProductAsync(product);
        }
        public async Task<IEnumerable<Category>> GetAllCategoriesAsync()
        {
            return await _adminRepository.GetAllCategoriesAsync();
        }

    }
}
