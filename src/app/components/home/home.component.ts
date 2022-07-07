import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { HomeService } from 'src/app/services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private homeService: HomeService, private router: Router) { }

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

  onContact() {
    
    this.router.navigate(['contact'])
  }
}
