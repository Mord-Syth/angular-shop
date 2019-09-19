import { TestBed, ComponentFixture } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationService } from './core/services/authentication.service';
import { AppSettingsService } from './core/services/app-settings.service';

let fixture: ComponentFixture<AppComponent>;

describe('AppComponent (Shallow)', () => {
  let mockHttp: HttpTestingController,
    settingsService: AppSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
      providers: [AuthenticationService, AppSettingsService],
      schemas: [NO_ERRORS_SCHEMA]
    });

    mockHttp = TestBed.get(HttpTestingController);
    settingsService = TestBed.get(AppSettingsService);
  });

  afterEach(() => {
    mockHttp.verify();
  });
  
  it('should load settings on start', () => {
    const spy = spyOn(settingsService, 'loadSettings');
    fixture = TestBed.createComponent(AppComponent);
    expect(spy.calls.count()).toBe(1, 'loadSettings was called once');
  });
});
