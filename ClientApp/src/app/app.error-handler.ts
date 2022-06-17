import { ErrorHandler, Inject, Injectable, Injector, NgZone } from '@angular/core';
import { NotificationService } from './services/notification.service';

@Injectable()
export class AppErrorHandler implements ErrorHandler {

  constructor(@Inject(Injector) private injector: Injector, private ngZone: NgZone) { }


  private get toastrService(): NotificationService {
    return this.injector.get(NotificationService);
  }

  handleError(error: any): void {
    this.ngZone.run(() => {
      console.log("ERROR");
      console.log(error);
      console.log("ERROR2");
    });

  }

}