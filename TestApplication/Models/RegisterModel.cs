using System.ComponentModel.DataAnnotations;

namespace TestApplication.Authentication
{
    public class RegisterModel
    {
        [Key]
        public int UserId { get; set; }
        [Required(ErrorMessage="User Name is required")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "User Name is required")]
        public string Email { get; set; }
        [Required(ErrorMessage = "User Name is required")]
        public string Password { get; set; }
    }
}
