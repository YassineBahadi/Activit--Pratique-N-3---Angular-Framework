import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone:true
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  selectedProduct: any = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  openDeleteModal(product: any) {
    this.selectedProduct = product;
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next:response=>{
        this.products = response;
      },
      error:err=>{
        console.log(err);
      }
    });
  }
  confirmDelete() {
    this.productService.deleteProduct(this.selectedProduct.id).subscribe({
      next:response=>{
         this.getAllProducts();
    this.selectedProduct = null;
      },
      error:err=>{
        console.log(err);
      }
    });
   
  }
}