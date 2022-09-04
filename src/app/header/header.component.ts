import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() optionView = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  selectedView(option:number):void{
    this.optionView.emit(option);
  }
}
