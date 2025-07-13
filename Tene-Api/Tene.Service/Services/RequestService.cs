using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.IRepositories;
using Tene.Core.IServices;
using Tene.Core.Models;

namespace Tene.Service.Services
{
    public class RequestService:IRequestService
    {
        private readonly IRequestRepository _requestRepository;
        public RequestService(IRequestRepository requestRepository)
        {
            _requestRepository= requestRepository;
        }
        public async Task<bool> AddNewRequest(RequestDetails requestDetails)
        {
          if( await _requestRepository.AddNewRequest(requestDetails))
            {
                //send email///////////////
                return true;
            }
            return false;
        }
    }
}
