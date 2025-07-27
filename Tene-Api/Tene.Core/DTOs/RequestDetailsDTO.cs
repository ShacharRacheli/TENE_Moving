using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tene.Core.Models;

namespace Tene.Core.DTOs
{
    public class RequestDetailsDTO
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string FromAddress { get; set; }
        public string ToAddress { get; set; }
        public int FromFloor { get; set; }
        public int ToFloor { get; set; }
        public bool FromElevator { get; set; }
        public bool ToElevator { get; set; }
        public DateTime Date { get; set; }
        public List<ProductsFromUserDTO> Products { get; set; } = new List<ProductsFromUserDTO>();
    }
}
