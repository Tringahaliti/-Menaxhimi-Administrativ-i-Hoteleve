using System.ComponentModel.DataAnnotations;

namespace TestApplication.Models2
{
    public class Hotel
    {
        [Key,Required]
        public int HotelId { get; set; }
        public string Name { get; set; } 
        public string Type { get; set; }
        public string City { get; set; } 
        public string  Address { get; set;}
        public int Distance { get; set; }
        public string Title { get; set; }
        public string Desc { get; set; }
        public int CheapestPrice { get; set; } 
    }
}
