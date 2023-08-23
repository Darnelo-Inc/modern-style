import { Component, OnInit } from "@angular/core"
import { IProduct } from "./models/product"
import { ProductService } from "./services/products.service"
import { Observable, tap } from "rxjs"
import { ErrorService } from "./services/error.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "modern-style"
  // products: IProduct[] = []
  loading = false
  products$: Observable<IProduct[]>

  constructor(
    private productsServie: ProductService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsServie
      .getAll()
      .pipe(tap(() => (this.loading = false)))
    // this.productsServie.getAll().subscribe((products) => {
    //   this.products = products
    //   this.loading = false
    // })
  }
}
