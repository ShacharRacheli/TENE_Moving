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
    }
}
