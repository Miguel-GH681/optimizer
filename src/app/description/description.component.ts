import { Component, Input, OnInit } from '@angular/core';
import { Floor } from 'interfaces/floor.interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() product?:Floor;

  constructor() { }

  ngOnInit(): void {
  }

}
