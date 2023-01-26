import * as ex from 'excalibur';
import { Actor, Collider, CollisionType, Engine, ScreenElement, Vector } from 'excalibur';

export class PathLine extends Actor {
  enabled: boolean = false;
  startPoint: ex.Vector;
  line: ex.Line;
  thickness: 2;
  pathLine: Actor;

  constructor() {
    super();
  }

  public toggle(game: Engine, pos: Vector): void {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.pathLine = new Actor({
        pos: pos,
        collisionType: CollisionType.Passive
      });
      game.add(this.pathLine);

      game.input.pointers.primary.on('move',  (event) => {
        const canvas = new ex.Canvas({
          width: game.drawWidth,
          height: 32, // must be 2^n
          draw: (ctx: CanvasRenderingContext2D) => {
            ctx.fillStyle = "#53fb00"; //Player Green in HEX
            const length = event.screenPos.distance(this.pathLine.pos);
            ctx.fillRect(0, 0, length, 10);
          },
        });
        this.pathLine.graphics.use(canvas);
        this.pathLine.anchor = new ex.Vector(0, 0.5);

        const rotation = event.screenPos.sub(this.pathLine.pos).toAngle();
        this.pathLine.rotation = rotation;
      });
    } else {
      this.pathLine.kill();
      game.input.pointers.primary.off('move');
    }

  }
}