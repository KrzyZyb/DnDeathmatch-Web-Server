import { Actor, Color, Engine } from 'excalibur';
import { PathLine } from './pathline';

export class Character extends Actor {
  selected: boolean = false;
  game: Engine;
  pathLine: PathLine;

  constructor(game: Engine) {
    super({ x: 150, y: (game.drawHeight - 100), color: Color.DarkGray, radius: 20 });
    this.game = game;
    this.pathLine = new PathLine(game);

    super.on("pointerdown", () => {
      this.selected = !this.selected;
      if (this.selected) {
        this.color = Color.Green;
        this.pathLine.togglePathLineDisplay(this.pos)
      }
      else {
        this.color = Color.White
        game.remove(this.pathLine);
        this.pathLine.togglePathLineDisplay(this.pos)
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