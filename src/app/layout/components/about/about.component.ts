import { Component, OnInit, Optional, Inject } from '@angular/core';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ConfigOptionsService } from '../../../core/services/config-options.service';
import { GeneratorService } from '../../../core/services/generator.service';
import { APPLICATIONINFO } from '../../../core/services/constant.service';
import { Token3 } from '../../../core/services/generator.factory';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(@Optional() private localStorage: LocalStorageService, @Optional() private config: ConfigOptionsService,
    @Optional() @Inject(APPLICATIONINFO) private constants: object, @Optional() private generator: GeneratorService,
    @Optional() @Inject(Token3) private token: string) { }

  ngOnInit() {
  }

}
