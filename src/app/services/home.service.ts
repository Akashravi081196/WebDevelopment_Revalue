import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  getProducts() {
    return this.webService.get('/api/products');
  }

  constructor(private webService: WebService) { }
}
