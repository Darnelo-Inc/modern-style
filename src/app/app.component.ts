import { Component, OnInit } from "@angular/core"
import { IProduct } from "./models/product"
import { ProductService } from "./services/products.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "modern-style"
  products: IProduct[] = []
  loading = false

  constructor(private productsServie: ProductService) {}

  ngOnInit(): void {
    this.loading = true
    this.productsServie.getAll().subscribe((products) => {
      this.products = products
      this.loading = false
    })
  }
}
