using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tene.Core.Models
{
    public class ProductDetails
    {
        [Key]
        public int Id { get; set; }
        public string ProductName { get; set; }
        public decimal Cob { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }  // joins product to category
    }
}
