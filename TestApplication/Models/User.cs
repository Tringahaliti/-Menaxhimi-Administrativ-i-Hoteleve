using System.ComponentModel.DataAnnotations;

namespace TestApplication.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Password { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
    }
}
