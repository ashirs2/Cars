import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  uploadProgress: Subject<any> = new Subject();
  constructor() { }

  startTracking() {
    this.uploadProgress = new Subject();
    return this.uploadProgress;
  }

  notify(progress) {
    if (this.uploadProgress)
      this.uploadProgress.next(progress);
  }

  endTracking() { 
    if (this.uploadProgress) 
      this.uploadProgress.complete();
  }

   

}

//@Injectable()
//export class BrowserXhrWithProgress extends HttpXhrBackend{
//  constructor(private progressService: ProgressService) { super(); }

//  build(): XMLHttpRequest { 

//    var xhr: XMLHttpRequest = super.build();

//    //xhr.onprogress = (event) => {
//    //  this.progressService.downloadProgress.next({
//    //    createProgress(event);
//    //  });
//    //};

//    xhr.upload.onprogress = (event) =>  {
//      this.progressService.uploadProgress.next({
//        createProgress(event);
//      });
//    }

//    return xhr; 
//  }

//  private createProgress(event) {
//    return {
//      total: event.total,
//      percentage: Math.round(event.loaded / event.total * 100)
//    };
//  }

//}
