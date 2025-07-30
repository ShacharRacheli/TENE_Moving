using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tene.Core.DTOs
{
    public class CategoryWithProductsDTO
    {
        
            public int Id { get; set; }
            public string CategoryName { get; set; }
            public List<ProductDTO> Products { get; set; }
    }
}
