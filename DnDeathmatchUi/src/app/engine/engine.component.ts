import { OnInit, Component, ElementRef, NgZone } from '@angular/core';
import { Application } from 'pixi.js';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})
export class EngineComponent implements OnInit {
  public app: Application;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.app = new Application({});
    });
    this.elementRef.nativeElement.appendChild(this.app.view);
  }

}
