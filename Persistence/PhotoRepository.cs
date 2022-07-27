using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cars.Core;
using Cars.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Cars.Persistence
{
    public class PhotoRepository : IPhotoRepository 
    {
        private readonly CarsDbContext context;


        public PhotoRepository(CarsDbContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Photo>> GetPhotos(int vehicleId)
        {

            return await context.Photos
                .Where(p => p.VehicleId == vehicleId)
                .ToListAsync();

        }

    }
}
