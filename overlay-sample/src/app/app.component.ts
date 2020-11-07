import { Component, OnInit } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'overlay-sample';

  constructor(private overlay: Overlay) { }

  ngOnInit() {
    const overlayRef = this.overlay.create(config);
    overlayRef.attach(new ComponentPortal(PanelComponent));
    setTimeout(() => {
      // ローディング終了
      overlayRef.detach();
    }, 3000);
  }

}

const config = new OverlayConfig({
  height: '100%',
  width: '100%',
  hasBackdrop: true,
});