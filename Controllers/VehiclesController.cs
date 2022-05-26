using System;
using System.Threading.Tasks;
using AutoMapper;
using Cars.Controllers.Resources;
using Cars.Models;
using Cars.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cars.Controllers
{
    [Route("/api/vehicles")]
    public class VehiclesController : Controller
    {
        private readonly IMapper mapper;
        private readonly IVehicleRepository repository;
        private readonly IUnitOfWork unitOfWork;

        public VehiclesController(IMapper mapper, IVehicleRepository repository,IUnitOfWork unitOfWork)
        {
            this.mapper = mapper;
            this.repository = repository;
            this.unitOfWork = unitOfWork;
            
        }


        [HttpPost]
        public async Task<IActionResult> CreateVehicle([FromBody] SaveVehicleResource SaveVehicleResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var model = await repository.GetVehicle(SaveVehicleResource.ModelId);
            if (model == null)
            {
                ModelState.AddModelError("ModelId", "Invalid modelId.");
                return BadRequest(ModelState);
            }
            var vehicle = mapper.Map<SaveVehicleResource, Vehicle>(SaveVehicleResource);
            vehicle.LastUpdate = DateTime.Now;

            repository.Add(vehicle);
            await unitOfWork.CompleteAsync();



            vehicle = await repository.GetVehicle(vehicle.Id);

            var result = mapper.Map<Vehicle, VehicleResource>(vehicle);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVehicle(int id, [FromBody] SaveVehicleResource SaveVehicleResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var vehicle = await repository.GetVehicle(id);

            if(vehicle == null)
            {
                return NotFound();
            }            

            mapper.Map<SaveVehicleResource, Vehicle>(SaveVehicleResource, vehicle);
            vehicle.LastUpdate = DateTime.Now;

            await unitOfWork.CompleteAsync();

            vehicle = await repository.GetVehicle(vehicle.Id);
            var result = mapper.Map<Vehicle, VehicleResource>(vehicle);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVehicle(int id)
        {
            var vehicle = await repository.GetVehicle(id, includeRelated: false);

            if(vehicle == null)
            {
                return NotFound();
            }

            repository.Remove(vehicle);
            await unitOfWork.CompleteAsync();

            return Ok(id);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetVehicle(int id)
        {


            var vehicle = await repository.GetVehicle(id);

            if (vehicle == null)
            {
                return NotFound();
            }


            var SaveVehicleResource = mapper.Map<Vehicle, VehicleResource>(vehicle);

            return Ok(SaveVehicleResource);

        }


    }
}
