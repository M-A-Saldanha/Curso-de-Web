import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    name: '',
    price: 0
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.productService.readById(id).subscribe(product => {
    this.product = product
    })
  }

  deleteProduct(): void {
    const id = +this.route.snapshot.params.id
    this.productService.delete(id).subscribe(() => {
    this.productService.showMessage("Produto deletado com sucesso!")
    this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
