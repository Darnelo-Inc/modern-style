import { Component, OnInit } from "@angular/core"
import { ErrorService } from "src/app/services/error.service"
import { ModalService } from "src/app/services/modal.service"
import { ProductService } from "src/app/services/products.service"

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"],
})
export class ProductPageComponent implements OnInit {
  title = "modern-style"
  // products: IProduct[] = []
  loading = false
  // products$: Observable<IProduct[]>
  search = ""

  constructor(
    public productsService: ProductService,
    private errorService: ErrorService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)))
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
