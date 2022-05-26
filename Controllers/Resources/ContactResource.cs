using System;
using System.ComponentModel.DataAnnotations;

namespace Cars.Controllers.Resources
{
    public class ContactResource
    {
        public ContactResource(){ }


        [Required]
        [StringLength(255)]
        public string Name { get; set; }
        [StringLength(255)]
        public string Email { get; set; }
        [Required]
        [StringLength(255)]
        public string Phone { get; set; }
    
    }
}
