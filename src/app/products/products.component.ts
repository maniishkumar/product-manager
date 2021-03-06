import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Product } from './../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['prod_name', 'prod_price'];
  data: Product[] = [];
  isLoadingResult = true;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProducts()
      .subscribe(res => {
        this.data = res;
        console.log(res);
        this.isLoadingResult = true;
      }, err => {
        console.log(err);
        this.isLoadingResult = false;
      })
  }

}
