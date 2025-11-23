using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Tene.Core.DTOs;
using Tene.Core.IRepositories;
using Tene.Core.IServices;
using Tene.Core.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Tene.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        private readonly IRequestService _requestService;
        private readonly IEmailService _emailService;
        private readonly IMapper _mapper;

        public RequestController(IRequestService requestService, IMapper mapper, IEmailService emailService)
        {
            _requestService = requestService;
            _mapper = mapper;
            _emailService = emailService;
        }
        [HttpPost]
        public async Task<IActionResult> AddNewRequest([FromBody] RequestDetailsDTO requestDto)
        {
            if (requestDto == null)
            {
                return NotFound("Request details are required.");
            }
            var requestDetails = _mapper.Map<RequestDetails>(requestDto);
            var result = await _requestService.AddNewRequest(requestDetails);

            //await _requestService
            return result ? Ok("Request added successfully.") : StatusCode(500, "An error occurred.");

        }
        [HttpPost("ContactUs")]
        public async Task<IActionResult> ContactUs([FromBody] ContactUsDTO requestDto)
        {
            if (requestDto == null)
            {
                return NotFound("Request details are required.");
            }
            var subject = "צור קשר";
            var body = $"שם מלא {requestDto.FullName} טלפון {requestDto.Phone} מייל {requestDto.Email} ";
            await _emailService.SendEmailAsync("hovalotin@gmail.com", subject, body);

            //await _requestService
            return Ok("send succesfully");

        }
        [HttpGet]
        public string getHello()
        {
            return "hellooo";
        }
    }
}
