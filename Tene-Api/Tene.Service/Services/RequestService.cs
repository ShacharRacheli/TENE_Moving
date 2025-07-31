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
    public class RequestService : IRequestService
    {
        private readonly IRequestRepository _requestRepository;
        private readonly IEmailService _emailService;

        public RequestService(IRequestRepository requestRepository, IEmailService emailService)
        {
            _requestRepository = requestRepository;
            _emailService = emailService;
        }
        public async Task<bool> AddNewRequest(RequestDetails requestDetails)
        {
            if (await _requestRepository.AddNewRequest(requestDetails))
            {
                //send email///////////////
                await _emailService.SendEmailAsync(requestDetails.Email, "הצעת מחיר טנא הובלות", "הפרטים נקלטו במערכת ואנו ניצור איתך קשר בהקדם");
                await _emailService.SendEmailAsync("@gmail.com", "הצעת מחיר טנא הובלות", "הפרטים נקלטו במערכת ואנו ניצור איתך קשר בהקדם");
                return true;
            }
            return false;
        }
    }
}