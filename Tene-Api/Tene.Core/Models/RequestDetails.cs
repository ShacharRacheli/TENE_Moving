using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tene.Core.Models
{
    public class RequestDetails
    {
        [Key]
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string FromAddress { get; set; }
        public string ToAddress { get; set; }
        public int  FromFloor{ get; set; }
        public int ToFloor { get; set; }
        public bool FromElevator { get; set; }
        public bool ToElevator { get; set; }
        public DateTime Date { get; set; }
        public List<Products> Products { get; set; } = new List<Products>();
    }
}
