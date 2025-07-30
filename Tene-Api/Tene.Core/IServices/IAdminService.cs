using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.DTOs;
using Tene.Core.Models;

namespace Tene.Core.IServices
{
    public interface IAdminService
    {
        Task<IEnumerable<ProductDetailsDTO>> GetAllProductsAsync();
        Task<bool> AddNewProductAsync(ProductDetails product);
        /// <summary>
        /// ////////////////
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<ProductDetails> GetByIdAsync(int id);
        Task<bool> UpdateProductAsync(int id, ProductDetails product);
        Task<IEnumerable<Category>> GetAllCategoriesAsync();
        Task<bool> AddNewCategoryAsync(string category);


    }
}
