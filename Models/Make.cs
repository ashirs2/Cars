using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Cars.Models;

namespace Cars.Models
{
    public class Make
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<Model> Models;

        public Make()
        {
            Models = new Collection<Model>();
        }
    }
}
