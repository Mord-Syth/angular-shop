import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  constructor(private localStorage: LocalStorageService) { }
  
  setConfiguration(id: number, settings: object): void {
    const currentConfiguration = this.localStorage.getObject(id.toString());
    const newConfiguration = Object.assign(currentConfiguration, settings);
    this.localStorage.setObject(id.toString(), newConfiguration);
  }

  getConfiguration(id: number): object {
    return this.localStorage.getObject(id.toString());
  }
}
