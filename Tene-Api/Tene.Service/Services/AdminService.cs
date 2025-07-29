using AutoMapper;
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
        private readonly IMapper _mapper;

        public AdminService(IAdminRepository adminRepository,IMapper mapper)
        {
            _adminRepository = adminRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ProductDetailsDTO>> GetAllProductsAsync()
        {
            var products =await _adminRepository.GetAllProductsWithCategoryAsync();
            return _mapper.Map<IEnumerable<ProductDetailsDTO>>(products);
            //return products.Select(p => new ProductDetailsDTO
            //{
            //    ProductName = p.ProductName,
            //    Cob = p.Cob,
            //    CategoryId = p.CategoryId
            //});
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

        public async Task<bool> UpdateProductAsync(int id,ProductDetails product)
        {
            return await _adminRepository.UpdateProductAsync(id,product);
        }
        public async Task<IEnumerable<Category>> GetAllCategoriesAsync()
        {
            return await _adminRepository.GetAllCategoriesAsync();
        }
        public async Task<bool> AddNewCategoryAsync(string category)
        {
            return await _adminRepository.AddNewCategoryAsync(category);
        }

    }
}
