using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tene.Core.Models
{
    public class ProductsFromUser
    {
        [Key]
        public int Id { get; set; }
        public int ProductId { get; set; }
        public ProductDetails Product{ get; set; }
        public int Amount { get; set; }
        public int RequestDetailsId { get; set; }
        public RequestDetails RequestDetails { get; set; }
    }
}
 