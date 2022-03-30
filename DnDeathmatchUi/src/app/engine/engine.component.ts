import { OnInit, Component, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})
export class EngineComponent implements OnInit {

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

  ngOnInit(): void {
  }

  updateState():void{
  }

}
