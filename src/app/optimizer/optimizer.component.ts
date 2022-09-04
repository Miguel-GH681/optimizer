import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Floor } from 'interfaces/floor.interface';
import { Materials } from 'interfaces/material.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-optimizer',
  templateUrl: './optimizer.component.html',
  styleUrls: ['./optimizer.component.css']
})
export class OptimizerComponent implements OnInit {

  @Input() product?:Floor;
  contactForm!:FormGroup;

  id: string;
  url: string;
  valores?:Materials;

  constructor(private readonly fb: FormBuilder, private readonly productService:ProductService, @Inject(DOCUMENT) document: Document) {
    this.url = document.location.href;
    this.id = this.url.substring(this.url.length - 7, this.url.length);
  }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit():void{
    this.productService.getMaterials(this.contactForm.value, this.id).subscribe((result)=>{
      this.valores = result;          
    });
  }

  initForm(): FormGroup{
    return this.fb.group({
      roomWidth: [''],
      roomLength: ['']
    })
  }
}
