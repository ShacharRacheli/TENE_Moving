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
       private readonly IRequestService _requestService ;
        private readonly IMapper _mapper;

        public RequestController(IRequestService requestService,IMapper mapper)
        {
            _requestService = requestService;
            _mapper = mapper;
        }
        [HttpPost]
        public async Task<IActionResult> AddNewRequest([FromBody] RequestDetailsDTO requestDto)
        {
            if (requestDto == null) { 
                return NotFound("Request details are required.");
            }
            var requestDetails = _mapper.Map<RequestDetails>(requestDto);
            var result = await _requestService.AddNewRequest(requestDetails);

            //await _requestService
            return result ? Ok("Request added successfully.") : StatusCode(500, "An error occurred.");

        }

        //// PUT api/<RequestController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<RequestController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
