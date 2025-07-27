using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tene.Core.Models
{
    public class ProductsFromUser
    {

        public int Id { get; set; }
        public string ProductName { get; set; }
        public int Amount { get; set; }
        //foreign 
        public int RequestDetailsId { get; set; }
        public RequestDetails RequestDetails { get; set; }
    }
}
