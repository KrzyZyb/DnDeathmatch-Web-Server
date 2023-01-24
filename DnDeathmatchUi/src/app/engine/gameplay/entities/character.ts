import { Actor, Color, Engine } from 'excalibur';
import { PathLine } from './Pointing/pathline';

export class Character extends Actor {
  selected: boolean = false;
  pathLine: PathLine;

  constructor(game: Engine) {
    super({ x: 150, y: (game.drawHeight - 100), color: Color.DarkGray, radius: 20 });
    super.on("pointerdown", () => {

      this.selected = !this.selected;
      if (this.selected) {
        this.pathLine = new PathLine(game, this.pos);
        this.color = Color.Green;
      }
      else {
        this.pathLine.kill;
        this.color = Color.White
      };
    });

    super.on("pointerenter", () => {
      if (!this.selected) { this.color = Color.LightGray }
    });

    super.on("pointerleave", () => {
      if (!this.selected) { this.color = Color.DarkGray }
    });
  }
}