import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/models/product.model';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  products: Product[] =[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.retriveData();
  }

  retriveData() {
    let username = localStorage.getItem("username");
    console.log(username)
    this.homeService.getProducts().subscribe(
      response => {
        let res = JSON.parse(JSON.stringify(response))
        for (let item of res) {
          let product = new Product(item.id, item.name, item.description, item.price, item.userid, false);
          this.products.push(product)
        }
      },
      error => {
        console.log(error)
      }
    );
  }
}

