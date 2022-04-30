import { OnInit, Component, ElementRef, NgZone } from '@angular/core';
import { Actor, CollisionType, Color, Engine } from 'excalibur';
import { Character } from './character';

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
    const player = this.createPlayerActor(game);
    player.body.collisionType = CollisionType.Fixed;
    game.add(player);
  }

  createPlayerActor(game: Engine): Actor {
    return new Character(150,(game.drawHeight - 40), Color.White);
  }

  updateState(): void {
  }

}
