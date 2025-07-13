using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.IRepositories;
using Tene.Core.Models;

namespace Tene.Data.Repositories
{
    public class RequestRepository:IRequestRepository
    {
        private readonly DataContext _dataContext;
        public RequestRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async Task<bool> AddNewRequest(RequestDetails requestDetails)
        {     
            await _dataContext.RequestsDetails.AddAsync(requestDetails);
            return await _dataContext.SaveChangesAsync()>=1;
        }

    }
}
