using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tene.Core.DTOs
{
    public class ProductDetailsUpdateAddDTO
    {
        public string ProductName { get; set; }
        public decimal Cob { get; set; }
        public int CategoryId { get; set; }
    }
}
