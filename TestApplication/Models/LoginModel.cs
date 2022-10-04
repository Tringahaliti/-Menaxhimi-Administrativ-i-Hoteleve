using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace TestApplication.Authentication
{
    [Keyless]
    public class LoginModel
    {
        [Required(ErrorMessage="User Name is required")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "User Name is required")]
        public string Password { get; set; }
    }
}
