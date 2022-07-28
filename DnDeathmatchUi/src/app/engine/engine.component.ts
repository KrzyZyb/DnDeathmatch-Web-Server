import { OnInit, Component, ElementRef, NgZone } from '@angular/core';
import { Actor, CollisionType, Color, Engine} from 'excalibur';
import * as ex from 'excalibur';
import { Character } from './character';
import { TiledMapResource } from '@excaliburjs/plugin-tiled';

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
    const tiledMap = new TiledMapResource("/assets/map.tmx");
    const loader = new ex.Loader([tiledMap]);
  
    game.start(loader).then(function() {
      console.log("Game loaded");
      tiledMap.addTiledMapToScene(game.currentScene);
      console.log(game.currentScene.tileMaps)
      console.log(game.currentScene.entities)

   });
  }

  createPlayerActor(game: Engine): Actor {
    return new Character(150,(game.drawHeight - 40), Color.White);
  }

  updateState(): void {
  }

}
