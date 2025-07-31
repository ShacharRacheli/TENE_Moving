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
        //public async Task<bool> AddNewRequest(RequestDetails requestDetails)
        //{
        //  if(await _requestRepository.AddNewRequest(requestDetails))
        //    {
        //        //send email///////////////
        //       await _emailService.SendEmailAsync(requestDetails.Email,"הצעת מחיר טנא הובלות","הפרטים נקלטו במערכת ואנו ניצור איתך קשר בהקדם");
        //       await _emailService.SendEmailAsync("@gmail.com","הצעת מחיר טנא הובלות","הפרטים נקלטו במערכת ואנו ניצור איתך קשר בהקדם");
        //        return true;
        //    }
        //    return false;
        //}
        //public async Task<bool> AddNewRequest(RequestDetails requestDetails)
        //{
        //    if (await _requestRepository.AddNewRequest(requestDetails))
        //    {
        //        var customerSummary = BuildCustomerEmail(requestDetails);
        //        var adminSummary = BuildAdminEmail(requestDetails);

        //        await _emailService.SendEmailAsync(
        //            requestDetails.Email,
        //            "סיכום הזמנה - טנא הובלות",
        //            customerSummary);

        //        await _emailService.SendEmailAsync(
        //            "admin@gmail.com", // replace with real admin address
        //            $"פרטי הזמנה מ: {requestDetails.FullName}",
        //            adminSummary);

        //        return true;
        //    }
        //    return false;
        //}
        public async Task<bool> AddNewRequest(RequestDetails requestDetails)
        {
            var saved = await _requestRepository.AddNewRequest(requestDetails);
            if (!saved) return false;

            // 👇 load full request with products & prices
            var fullRequest = await _requestRepository.GetRequestWithProducts(requestDetails.Id);
            if (fullRequest == null) return false;

            var customerEmail = BuildCustomerEmail(fullRequest);
            var adminEmail = BuildAdminEmail(fullRequest);
            Console.WriteLine("===================================");
            Console.WriteLine(customerEmail);
            Console.WriteLine(adminEmail);
            Console.WriteLine("===================================");
            await _emailService.SendEmailAsync(fullRequest.Email, "סיכום הזמנה - טנא הובלות", customerEmail);
            await _emailService.SendEmailAsync("r0583237001@gmail.com", "הזמנה חדשה", adminEmail);

            return true;
        }
        private string BuildCustomerEmail(RequestDetails request)
        {
            var sb = new StringBuilder();
            sb.AppendLine($"שלום {request.FullName},");
            sb.AppendLine("הפרטים שלך נקלטו במערכת:");
            //sb.AppendLine($"תאריך מעבר: {request.Date:dd/MM/yyyy}");
            //sb.AppendLine($"מכתובת: {request.FromAddress}");
            //sb.AppendLine($"לכתובת: {request.ToAddress}");

            //if (request.FromFloor != 0)
            //    sb.AppendLine($"קומת מוצא: {request.FromFloor}");
            //if (request.ToFloor != 0)
            //    sb.AppendLine($"קומת יעד: {request.ToFloor}");

            //sb.AppendLine($"מעלית במוצא: {(request.FromElevator ? "קיימת" : "לא קיימת")}");
            //sb.AppendLine($"מעלית ביעד: {(request.ToElevator ? "קיימת" : "לא קיימת")}");

            //sb.AppendLine("\nמוצרים שנבחרו:");
            //foreach (var item in request.SelectedProducts)
            //{
            //    sb.AppendLine($"- {item.Product.ProductName} × {item.Quantity}");
            //}

            return sb.ToString();
        }

        private string BuildAdminEmail(RequestDetails request)
        {
            var sb = new StringBuilder();
            sb.AppendLine("התקבלה הזמנה חדשה:");
            sb.AppendLine($"שם: {request.FullName}");
            sb.AppendLine($"אימייל: {request.Email}");
            sb.AppendLine($"תאריך מעבר: {request.Date:dd/MM/yyyy}");
            sb.AppendLine($"מכתובת: {request.FromAddress} (קומה {request.FromFloor}, מעלית: {(request.FromElevator ? "קיימת" : "אין")})");
            sb.AppendLine($"לכתובת: {request.ToAddress} (קומה {request.ToFloor}, מעלית: {(request.ToElevator ? "קיימת" : "אין")})");

            sb.AppendLine("\nמוצרים:");
            decimal total = 0;
            foreach (var item in request.Products)
            {
                var sumCob = item.Product.Cob * item.Amount;
                total += sumCob;
                sb.AppendLine($"- {item.Product.ProductName} × {item.Amount} = {sumCob}");
            }

            sb.AppendLine($"\nסה\"כ לקוב: ₪{total}");

            return sb.ToString();
        }

    }
}