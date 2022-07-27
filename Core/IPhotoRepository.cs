using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Cars.Core.Models;

namespace Cars.Core
{
    public interface IPhotoRepository
    {
        Task<IEnumerable<Photo>> GetPhotos(int vehicleId);
    }
}
