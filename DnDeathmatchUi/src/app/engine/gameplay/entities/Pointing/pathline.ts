import * as ex from 'excalibur';
import { Actor, Engine, ScreenElement, Vector } from 'excalibur';

export class PathLine extends Actor {
  enabled: boolean = false;
  startPoint: ex.Vector;
  line: ex.Line;
  thickness: 2;
  public eventPubSuber: Actor;

  constructor(game: Engine, pos:Vector) {
    super();
    this.eventPubSuber = new Actor();
    let dragUI: ScreenElement;
  
    game.input.pointers.primary.on('down', function (event) {
      if (dragUI) dragUI.kill();
  
      dragUI = new ScreenElement({
        pos: pos,
      });
      game.add(dragUI);
  
      game.input.pointers.primary.on('move', function (event) {
        const canvas = new ex.Canvas({
          width: game.drawWidth,
          height: 32, // must be 2^n
          draw: (ctx: CanvasRenderingContext2D) => {
            ctx.fillStyle = "red";
            const length = event.screenPos.distance(dragUI.pos);
            ctx.fillRect(0, 0, length, 10);
          },
        });
        dragUI.graphics.use(canvas);
        dragUI.anchor = new ex.Vector(0, 0.5);
  
        const rotation = event.screenPos.sub(dragUI.pos).toAngle();
        dragUI.rotation = rotation;
      });
    });
  
    game.input.pointers.primary.on('up', function (event) {
      if (!dragUI) return;
      dragUI.kill();
  
      game.input.pointers.primary.off('move');
    });
  }

  override update(engine: Engine, delta: number){
    super.update(engine, delta)
  }

}