using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.DTOs;
using Tene.Core.Models;

namespace Tene.Core.IRepositories
{
    public interface IAdminRepository
    {
        Task<IEnumerable<ProductDetails>> GetAllProductsWithCategoryAsync();
        Task<bool> AddProductAsync(ProductDetails product);
        Task<ProductDetails> GetByIdAsync(int id);//////////////
        Task<bool> UpdateProductAsync(int id, ProductDetails product);/////////////////////
        Task<IEnumerable<Category>> GetAllCategoriesAsync();
        Task<bool> AddNewCategoryAsync(string category);
    }
}
