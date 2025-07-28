using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.IRepositories;
using Tene.Core.Models;

namespace Tene.Data.Repositories
{
    public class AdminRepository: IAdminRepository
    {
        private readonly DataContext _dataContext;

        public AdminRepository(DataContext context)
        {
            _dataContext = context;
        }

        public async Task<IEnumerable<ProductDetails>> GetAllProductsWithCategoryAsync()
        {
            return await _dataContext.ProductsDetails
                .Include(p => p.Category)
                .ToListAsync();
        }

        public async Task<bool> AddProductAsync(ProductDetails product)
        {
            await _dataContext.ProductsDetails.AddAsync(product);
            return await _dataContext.SaveChangesAsync() > 0;
        }
        /////////////////////
        ///
        public async Task<ProductDetails> GetByIdAsync(int id)
        {
            return await _dataContext.ProductsDetails.FindAsync(id);
        }

        public async Task<bool> UpdateProductAsync(ProductDetails product)
        {
           var tempProduct=await _dataContext.ProductsDetails.FirstOrDefaultAsync(p=>p.Id==product.Id);
            if (tempProduct != null) { 
            tempProduct.CategoryId = product.CategoryId;
                tempProduct.ProductName = product.ProductName;
                tempProduct.Cob=product.Cob;
                    await _dataContext.SaveChangesAsync();
            return true;
            }
            return false;
        }
        public async Task<IEnumerable<Category>> GetAllCategoriesAsync()
        {
            
            return await _dataContext.Category.ToListAsync();
        }

    }
}
