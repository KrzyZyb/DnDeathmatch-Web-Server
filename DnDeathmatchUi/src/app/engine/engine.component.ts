import { OnInit, Component, ElementRef, NgZone } from '@angular/core';
import { Actor, CollisionType, Color, Engine } from 'excalibur';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})
export class EngineComponent implements OnInit {

  constructor(private elementRef: ElementRef, private ngZone: NgZone) { }

  ngOnInit(): void {
    const game = new Engine({
      width: 800,
      height: 600,
    });
    game.start();
    const paddle = this.createPlayerActor(game);
    paddle.body.collisionType = CollisionType.Fixed;
    game.add(paddle);
  }

  createPlayerActor(game: Engine): Actor {
    const hero = new Actor({
      x: 150,
      y: game.drawHeight - 40,
      width: 30,
      height: 30,
      color: Color.Chartreuse,
    });

    hero.on("pointerdown", () => {
      console.log("Pointer down!");
    });
    hero.on("pointerenter", () => {
      console.log("Pointer enter!");
    });
    hero.on("pointerleave", () => {
      console.log("Pointer leave!");
    });
    return hero;

  }


  updateState(): void {
  }

}
