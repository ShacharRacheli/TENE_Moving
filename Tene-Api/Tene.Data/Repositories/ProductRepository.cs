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
 public   class ProductRepository:IProductRepository
    {
        private readonly DataContext _dataContext;
        public ProductRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async Task<List<Category>> GetAllCategoriesWithProductsAsync()
        {
            return await _dataContext.Category
                .Include(c => c.Products)
                .ToListAsync();
        }

    }
}
