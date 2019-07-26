import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(key: string, value: any): void {
    window.localStorage[key] = value;
  }

  getItem(key: string, defaultValue: any): any {
    return window.localStorage[key] || defaultValue;
  }

  setObject(key: string, value: any): void {
    window.localStorage[key] = JSON.stringify(value);
  }

  getObject(key: string): any {
    const result = JSON.parse(window.localStorage[key] || '{}');
    return result.length || Object.keys(result).length !== 0 ? result : null;
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }
}
