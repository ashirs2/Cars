
import { Component, Injectable, OnInit, NgZone, Inject, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeatureService } from '../services/feature.service';
import { MakeService } from '../services/make.service';
import { NotificationService } from '../services/notification.service';
import { VehicleService } from '../services/vehicle.service';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs';
import { Vehicle,SaveVehicle } from '../models/vehicle';
import * as _ from 'underscore';


@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
@Injectable()
export class VehicleFormComponent implements OnInit {
  makes: any[];
  features: any[];
  models: any[];
  vehicle: SaveVehicle = {
    id: 0,
    makeId: 0,
    modelId: 0,
    isRegistered: false,
    features: [],
    contact: {
      name: '',
      email: '',
      phone: '',
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    @Inject(Injector) private injector: Injector,
    private vehicleService: VehicleService,
    private ngZone: NgZone) {

    route.params.subscribe(p => {
      this.vehicle.id = +p['id']
    });
  }

  ngOnInit() {

    var sources = [
      this.vehicleService.getMakes(),
      this.vehicleService.getFeatures()
    ]

    if (this.vehicle.id) {
      sources.push(this.vehicleService.getVehicle(this.vehicle.id))
    }


    Observable.forkJoin(sources).subscribe(data => {
      this.makes = data[0];
      this.features = data[1];

      if (this.vehicle.id) {
        this.setVehicle(data[2]);
        this.populateModels();
      }


    }, err => {
      if (err.status == 404) {
        this.router.navigate(['']);
      }
    });

  }

  private setVehicle(v: Vehicle) {
    this.vehicle.id = v.id;
    this.vehicle.makeId = v.make.id;
    this.vehicle.modelId = v.model.id;
    this.vehicle.isRegistered = v.isRegistered;
    this.vehicle.contact = v.contact;
    this.vehicle.features = _.pluck(v.features, 'id');
  }

  private get toastrService(): NotificationService {
    return this.injector.get(NotificationService);
  }

  onMakeChange() {
    this.populateModels();
    delete this.vehicle.modelId;
  }


  private populateModels() {
    var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];
  }

  onFeatureToggle(featureId, $event) {
    if ($event.target.checked) {
      this.vehicle.features.push(featureId);
    } else {
      var index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }
  }


  submit() {
    var IsRegistered = (this.vehicle.isRegistered == true)
    this.vehicle.isRegistered = IsRegistered;

    if (this.vehicle.id) {
      this.vehicleService.update(this.vehicle)
        .subscribe(x =>
          this.ShowSuccess())
    } else {

      this.vehicleService.create(this.vehicle)
        .subscribe(
          data => {
            console.log(data)
            this.ShowSuccess();
          },
          error => {
            this.ShowError();
          });
    }

  }

  delete() {
    if (confirm("Are you Sure")) {
      this.vehicleService.delete(this.vehicle.id)
        .subscribe(x => {
          this.router.navigate(['']);
    });
    }
    }
  
  

  ShowError() {
    console.log("HERE")
      this.ngZone.run(() => {
        this.toastrService.showError("ERROR", "Error");
        console.log("HERE1")
      });
  }

  ShowSuccess(){
      this.ngZone.run(() => {
        this.toastrService.showSuccess("SUCCESS", "Success");
      });
  }
}