import { OnInit, Component, ElementRef, NgZone } from '@angular/core';
import { Application, Container, Sprite, Texture } from 'pixi.js';

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
    this.updateState();
  }

  updateState():void{
    const bunny = Sprite.from('../assets/class_wizard.png');
    bunny.anchor.set(0.5);
    bunny.x = this.app.screen.width / 2;
    bunny.y = this.app.screen.height / 2;
    this.app.stage.addChild(bunny);
  }

}
