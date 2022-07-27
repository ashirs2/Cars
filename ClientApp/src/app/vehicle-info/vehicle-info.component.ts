import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { ProgressService } from '../services/progress.service';


@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  vehicle: any;
  vehicleId: number;
  photos: any[]
  progress: any;

  constructor(
              private vehicleService: VehicleService,
              private route: ActivatedRoute,
              private router: Router,
              private photoService: PhotoService,
              private progressService: ProgressService
              ) {

    route.params.subscribe(p => {
      this.vehicleId = +p['id']
      if(isNaN(this.vehicleId) || this.vehicleId <= 0) {
        router.navigate(['/vehicles']);
        return;
      }
    });
  }

  ngOnInit(): void {

    this.photoService.getPhotos(this.vehicleId)
      .subscribe(photos => this.photos = photos);


    this.vehicleService.getVehicle(this.vehicleId)
      .subscribe(
        v => {
          this.vehicle = v
          console.log(this.vehicle);
        },
    err => {
      if (err.status == 404) {
        this.router.navigate(['/vehicles']);
        return;
      }
    });

  }

  delete(){
      if (confirm("Are you sure?")) {
        this.vehicleService.delete(this.vehicle.id)
          .subscribe(x => {
            this.router.navigate(['/vehicles']);
          });
      }
  }


  uploadPhoto() {
    var nativeElement: HTMLInputElement = this.fileInput.nativeElement;


    //this.progressService.uploadProgress.subscribe(
    //  progress => {
    //    this.progress = progress;
    //    console.log(progress);
    //  });


    this.photoService.upload(this.vehicleId, nativeElement.files[0])
      .subscribe(photo => {
        this.photos.push(photo);
      });
    


  }


}
