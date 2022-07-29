import { OnInit } from '@angular/core';
import * as ex from 'excalibur';
import { Actor, CollisionType, Color, Engine } from 'excalibur';

export class Character extends Actor{
  selected: boolean = false;
  game: Engine;
  pathLine: Actor;

  constructor(game: Engine) {
    super({ x: 150, y: (game.drawHeight - 100), color: Color.DarkGray, radius: 20});
    this.game = game;

    super.on("pointerdown", () => {
      this.selected=!this.selected;
      if(this.selected){
        this.color = Color.Green
        this.displayMovePath(this, game, true);
      }
      else{
        this.color = Color.White
        game.remove(this.pathLine);
      };
    });

    super.on("pointerenter", () => {
      if(!this.selected){this.color = Color.LightGray}
    });

    super.on("pointerleave", () => {
      if(!this.selected){this.color = Color.DarkGray}
    });
  }

  displayMovePath(actor: Actor, game: Engine, isPathDisplayed: boolean) {
    const lineActor: Actor = new ex.Actor({})
    lineActor.graphics.anchor = ex.Vector.Zero
    lineActor.graphics.use(
      new ex.Line({
        start: ex.vec(actor.pos.x, actor.pos.y),
        end: ex.vec(800, 600),
        color: ex.Color.Green,
        thickness: 10,
      })
    )
    game.add(lineActor)
    this.pathLine = lineActor;
  }

}




