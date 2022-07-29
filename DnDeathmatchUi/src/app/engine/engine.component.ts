import { OnInit, Component, ElementRef, NgZone } from '@angular/core';
import { Actor, CollisionType, Color, Engine} from 'excalibur';
import * as ex from 'excalibur';
import { Character } from './gameplay/entities/character';
import { TiledMapResource } from '@excaliburjs/plugin-tiled';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})
export class EngineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const game: Engine = new Engine({
      width: 800,
      height: 600,
    });
    const tiledMap = new TiledMapResource("/assets/map.tmx");
    tiledMap.convertPath = (originPath, relativePath) => {
      console.log(originPath, relativePath);
      const segments = relativePath.split('/');
      const filename = segments[segments.length - 1];
      return '/assets/' + filename;
    }
    const loader = new ex.Loader([tiledMap]);
    game.start(loader).then(function() {
      tiledMap.addTiledMapToScene(game.currentScene);
   });
   
   let character:Actor = this.createPlayerActor(game);
   game.add(character);
  }

  createPlayerActor(game: Engine): Actor {
    return new Character(game);
  }

  updateState(): void {
  }

}
