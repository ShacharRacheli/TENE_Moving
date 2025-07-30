using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.DTOs;

namespace Tene.Core.IServices
{
    public interface IProductService
    {
        Task<IEnumerable<CategoryWithProductsDTO>> GetCategoriesWithProductsAsync();

    }
}
