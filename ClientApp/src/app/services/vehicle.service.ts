import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SaveVehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getMakes() {
    return this.http.get('api/makes').pipe(map((res:any) => res));
  }

  getFeatures() {
    return this.http.get('api/features').pipe(map((res:any) => res));
  }

  create(vehicle) {
    console.log(vehicle);
    return this.http.post('/api/vehicles', JSON.stringify(vehicle), {headers: {'Content-Type': 'application/json; charset=utf-8' }} ).pipe(map((res: any) => res));
  }

  getVehicle(id) {
    return this.http.get('/api/vehicles/' + id).pipe(map((res: any) => res));
  }

  update(vehicle: SaveVehicle) {
    return this.http.put('/api/vehicles/' + vehicle.id, vehicle).pipe(map((res: any) => res));
  }

  delete(id) {
    return this.http.delete('/api/vehicles/' + id).pipe(map((res: any) => res));
  }

  getVehicles() {
    return this.http.get('/api/vehicles').pipe(map((res: any) => res));

  }

  getVehiclesId() {
    return this.http.get('/api/vehicleId').pipe(map((res: number) => res));
  }
}
