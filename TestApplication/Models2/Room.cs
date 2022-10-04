using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TestApplication.Models2
{
    public class Room
    {
        [Key,Required]
        public int RoomId { get; set; }
        public string Title { get; set; }
        public string Desc { get; set; }
        public int Price { get; set; }
        public int MaxPeople { get; set; }
    }
}
