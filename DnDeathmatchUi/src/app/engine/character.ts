import { OnInit } from '@angular/core';
import { Actor, CollisionType, Color, Engine } from 'excalibur';

export class Character extends Actor{
  selected: boolean;

  constructor(x:number,y:number, color: Color) {
    super({ x: x, y: y, color: color, radius: 20});

    super.on("pointerdown", () => {
      this.selected=!this.selected;
      if(this.selected){this.color = Color.Red}
      else{this.color = Color.White};
    });

    super.on("pointerenter", () => {
      if(!this.selected){this.color = Color.LightGray}
    });

    super.on("pointerleave", () => {
      if(!this.selected){this.color = Color.White}
    });
  }

}