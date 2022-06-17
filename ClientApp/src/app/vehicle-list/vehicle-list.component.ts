import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[];


  constructor(private vehiclesService: VehicleService) {
    this.vehicles = null;
  }

  ngOnInit(): void {

    this.vehiclesService.getVehicles()
      .subscribe(vehicles => {
        this.vehicles = vehicles
        console.log(this.vehicles)
      });
    console.log(this.vehicles);
  }

}
