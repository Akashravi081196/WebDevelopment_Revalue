import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public products: Product[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retriveData();
  }

  url="";

  retriveData() {
    let username = localStorage.getItem("username");
    console.log(username)
    this.userService.getUserProducts(username).subscribe(
      response => {
        let res = JSON.parse(JSON.stringify(response))
        console.log(res)
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

  addProduct() {
    console.log("Calling !!");
    let username = localStorage.getItem("username");
    let product = new Product('', '', '', 0, username || "", true);
    this.products.push(product);
  }

  editProduct(product: any) {
    product.isEditable = true;
  }

  deleteProduct(product: any) {
    this.userService.deleteProduct(product).subscribe(
      response => {
        location.reload()
      },
      error => {
        console.log(error)
      }
    )
  }

  saveProduct(product: any) {
    if(product.id == '') {
      console.log("Hello");
      this.userService.createProduct(product).subscribe(
        response => {
          product.isEditable = false;
          location.reload();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log("Hello");
      this.userService.saveProduct(product).subscribe(
        response => {
          product.isEditable = false;
          location.reload();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  // onselectFile(a){
  //   if(a.target.files){
  //     var reader = new FileReader();
  //     reader.readAsDataURL(a.target.files[0]);
  //     reader.onload=(event:any)=>{
  //       this.url=event.target.result;
  //     }
  //   }

  }

