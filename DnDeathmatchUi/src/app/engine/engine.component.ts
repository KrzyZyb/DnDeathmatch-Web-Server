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
    const paddle = new Actor({
      x: 150,
      y: game.drawHeight - 40,
      width: 200,
      height: 20,
      // Let's give it some color with one of the predefined
      // color constants
      color: Color.Chartreuse,
    });

    // Make sure the paddle can partipate in collisions, by default excalibur actors do not collide with each other
    // CollisionType.Fixed is like an object with infinite mass, and cannot be moved, but does participate in collision.
    paddle.body.collisionType = CollisionType.Fixed;

    // `game.add` is the same as calling
    // `game.currentScene.add`
    game.add(paddle);
  }


  updateState(): void {
  }

}
