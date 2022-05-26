using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Cars.Controllers.Resources;
using Cars.Models;
using Cars.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cars.Controllers
{
    public class FeaturesController : Controller
    {
        private readonly IMapper mapper;
        private readonly CarsDbContext context;

        public FeaturesController(CarsDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
        }

        [HttpGet("/api/features")]
        public async Task<IEnumerable<KeyValuePairResource>> GetFeatures()
        {
            var features = await context.Features.ToListAsync();
            return mapper.Map<List<Feature>, List<KeyValuePairResource>>(features);
        }

        
    }
}
