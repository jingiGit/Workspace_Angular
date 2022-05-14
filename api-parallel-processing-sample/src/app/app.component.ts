import { Component, VERSION } from '@angular/core';

import { SubscribeService } from './subscribe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'api-parallel-processing-sample';

  constructor(private subscribeService: SubscribeService) {}

  ngClick_1() {
    this.subscribeService.test1();
  }

  ngClick_2() {
    this.subscribeService.test2();
  }

  ngClick_3() {
    this.subscribeService.test3();
  }

  ngClick_4() {
    this.subscribeService.test4();
  }

  ngClick_5() {
    this.subscribeService.test5();
  }
}
