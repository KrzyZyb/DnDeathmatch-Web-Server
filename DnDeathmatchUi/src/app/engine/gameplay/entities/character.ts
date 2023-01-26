import { Actor, Color, Engine, Vector } from 'excalibur';
import { PathLine } from './Pointing/pathline';

export class Character extends Actor {
  selected: boolean = false;
  public pathLine: PathLine;

  constructor(game: Engine) {
    super({ x: 150, y: (game.drawHeight - 100), color: Color.DarkGray, radius: 20 });
    this.on("pointerdown", () => {
      this.selected = !this.selected;
      if (this.selected) {
        this.color = Color.Green;
        if (!this.pathLine) {
          this.pathLine = new PathLine();
        }
        this.pathLine.toggle(game, this.pos);
      }
      else {
        this.pathLine.toggle(game, this.pos);
        this.color = Color.White
      };
    });

    this.on("pointerenter", () => {
      if (!this.selected) { this.color = Color.LightGray }
    });

    this.on("pointerleave", () => {
      if (!this.selected) { this.color = Color.DarkGray }
    });
  }
}
