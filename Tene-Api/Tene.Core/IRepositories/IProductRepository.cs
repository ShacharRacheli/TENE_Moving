using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.Models;

namespace Tene.Core.IRepositories
{
 public   interface IProductRepository
    {
        Task<List<Category>> GetAllCategoriesWithProductsAsync();
    }
}
