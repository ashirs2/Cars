﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Cars.Controllers.Resources;
using Cars.Core.Models;

namespace Cars.Core
{
    public interface IVehicleRepository
    {
        Task<Vehicle> GetVehicle(int id, bool includeRelated = true);
        void Add(Vehicle vehicle);
        void Remove(Vehicle vehicle);
        Task<IEnumerable<Vehicle>> GetVehicles();
    }
}
