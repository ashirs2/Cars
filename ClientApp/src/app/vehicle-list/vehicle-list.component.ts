import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { KeyValuePair, Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[];
  makes: KeyValuePair[];

  constructor(private vehiclesService: VehicleService) {
    this.vehicles = null;
  }

  ngOnInit(): void {

    this.vehiclesService.getMakes()
      .subscribe(makes => this.makes = makes);

    this.vehiclesService.getVehicles()
      .subscribe(vehicles => {
        this.vehicles = vehicles

        setTimeout(() => {
          $('#vehiclesTable').DataTable({
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            lengthMenu: [5, 10, 25]
          });
        }, 1);
        console.log(this.vehicles)

      }, error => console.error(error));



        
      }
  

}
