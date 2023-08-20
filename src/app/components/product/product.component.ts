import { Component, Input } from "@angular/core"
import { IProduct } from "src/app/models/product"

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent {
  @Input("productProp") product: IProduct

  showDetails = false
}
