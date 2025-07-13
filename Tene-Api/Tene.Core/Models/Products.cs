using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tene.Core.Models
{
    public class Products
    {
        public int Id { get; set; }
        public string ProductId { get; set; }
        public int Amount { get; set; }
        //foreign 
        public int RequestDetailsId { get; set; }
        public RequestDetails RequestDetails { get; set; }
    }
}
