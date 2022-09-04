import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Floor } from 'interfaces/floor.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {

  id: string;
  url: string;
  floor?: Floor;

  viewDescription: boolean = true;
  viewAccesories: boolean = false;

  constructor(@Inject(DOCUMENT) document: Document, private readonly floorService: ProductService) {
    this.url = document.location.href;
    this.id = this.url.substring(this.url.length - 7, this.url.length);
    this.getFloor(this.id);
  }

  ngOnInit(): void {
  }

  getFloor(id:string){
    this.floorService.getFloor(id).subscribe((res : Floor)=>{
      this.floor = res;
    });
  }

  changeViews(option: number){
    if(option == 0){
      this.viewDescription = true;
      this.viewAccesories = false;
    } else{
      this.viewDescription = false;
      this.viewAccesories = true;
    }
  }
}
