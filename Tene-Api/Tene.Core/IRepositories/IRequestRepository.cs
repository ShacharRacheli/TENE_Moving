using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.Models;

namespace Tene.Core.IRepositories
{
    public interface IRequestRepository
    {
        Task<bool> AddNewRequest(RequestDetails requestDetails);
        Task<RequestDetails> GetRequestWithProducts(int requestId); // 👈 add this
        Task<ProductDetails> GetProductByIdAsync(int id);

    }
}

