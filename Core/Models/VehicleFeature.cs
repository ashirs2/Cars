using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cars.Core.Models
{
    [Table("VehicleFeatures")]
    public class VehicleFeature
    {
        public int VehicleId { get; set; }

        public int FeatureId { get; set; }

        public Vehicle vehicle { get; set; }

        public Feature Feature { get; set; }


        public VehicleFeature()
        {
        }


    }
}
