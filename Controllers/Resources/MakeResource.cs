using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using Cars.Models;

namespace Cars.Controllers.Resources
{
    public class MakeResource
    {
        public int Id { get; set; }

       
        public string Name { get; set; }

        public ICollection<ModelResource> Models { get; set; }


        public MakeResource()
        {
            Models = new Collection<ModelResource>();
        }
       
    }
}
