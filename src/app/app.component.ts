import { Component } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';
import { AppSettingsService } from './core/services/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book shop';

  constructor(public authService: AuthenticationService, settingsService: AppSettingsService) {
    settingsService.loadSettings();
  }
}
