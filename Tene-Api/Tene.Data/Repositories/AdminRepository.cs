using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.DTOs;
using Tene.Core.IRepositories;
using Tene.Core.Models;

namespace Tene.Data.Repositories
{
    public class AdminRepository : IAdminRepository
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

            //return products.Select(p => new ProductDetailsDTO
            //{
            //    Id = p.Id,
            //    ProductName = p.ProductName,
            //    Cob = p.Cob,
            //    CategoryId = p.CategoryId,
            //    CategoryName = p.Category.CategoryName // <-- this must be included
            //});
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

        public async Task<bool> UpdateProductAsync(int id, ProductDetails product)
        {
            var tempProduct = await _dataContext.ProductsDetails.FirstOrDefaultAsync(p => p.Id == id);
            if (tempProduct != null)
            {
                tempProduct.CategoryId = product.CategoryId;
                tempProduct.ProductName = product.ProductName;
                tempProduct.Cob = product.Cob;
                await _dataContext.SaveChangesAsync();
                return true;
            }
            return false;
        }
        public async Task<IEnumerable<Category>> GetAllCategoriesAsync()
        {

            return await _dataContext.Category.ToListAsync();
        }
        public async Task<bool> AddNewCategoryAsync(string category)
        {
            var newCategory = new Category { CategoryName = category };
            await _dataContext.Category.AddAsync(newCategory);
            return await _dataContext.SaveChangesAsync() > 0;
        }

    }
}
