import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient){

  }


  getAllProducts():Observable<any> {
    return this.http.get("http://localhost:8083/products");
  }

  deleteProduct(id: number) {
   return this.http.delete(`http://localhost:8083/products/${id}`);
   
  }
}