import * as ex from 'excalibur';
import { Actor, Engine } from 'excalibur';

export class PathLine extends Actor {
  enabled: boolean = false;
  startPoint: ex.Vector;
  line: ex.Line;
  game: Engine;
  thickness: 10;

  constructor(game: Engine) {
    super();
    this.game = game;
  }

  togglePathLineDisplay(startPoint: ex.Vector) {
    this.enabled = !this.enabled
    if (this.enabled) {
      this.line = new ex.Line({
        start: ex.vec(startPoint.x, startPoint.y),
        end: ex.vec(100, 100),
        color: ex.Color.Green,
        thickness: 10,
      })
      this.graphics.use(this.line);
      this.game.add(this);
    } else {
      this.game.remove(this);
    }
  }
}