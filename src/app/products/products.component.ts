import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone:true
})
export class ProductsComponent implements OnInit{
  products!:Array<any>;
  selectedProduct: any = null;
  constructor(){

  }


  ngOnInit(){
    this.products=[
    {
      id:1,
      name:"PC",
      price:2000,
      selected:true
    },
    {
      id:2,
      name:"Smartphone",
      price:1000,
      selected:false
    },
    {
      id:3,
      name:"Printer",
      price:500,
      selected:true
    }
  ]
  }

  openDeleteModal(product: any) {
  this.selectedProduct = product;
}

confirmDelete() {
  this.products = this.products.filter(
    p => p.id !== this.selectedProduct.id
  );
  this.selectedProduct = null;
}
}
