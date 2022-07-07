import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserProducts(username: string | null) {
    return this.webService.get(`/api/product/${username}`)
  }

  constructor(private webService: WebService) { }

  saveProduct(product: any) {
    return this.webService.put('/api/products', product);
  }

  createProduct(product: any) {
    return this.webService.post('/api/products', product);
  }

  deleteProduct(product: any) {
    return this.webService.delete(`/api/product/${product.id}`);
  }
}
