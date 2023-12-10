import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  info(message: string) {
    console.log('INFO :: ' + message);
  }
}
