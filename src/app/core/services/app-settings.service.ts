import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  private url = 'http://localhost:4200/assets/app-settings.json';
  private defaultSettings = {
    userName: 'Anonymous'
  }

  constructor(private http: HttpClient, private storage: LocalStorageService) { }

  loadSettings(): void {

    const settings = this.storage.getItem('userName', null);

    if (!settings) {
      this.http.get(this.url).pipe(
        retry(2),
        catchError(this.handleError.bind(this))
      ).subscribe((settings) => this.setSettings(settings));
    }
  }

  private handleError() {
    this.setSettings(this.defaultSettings);
    return throwError('Something bad happened; defaults are set.');
  }

  private setSettings(settings) {
    this.storage.setItem('userName', settings.userName);
  }
}
