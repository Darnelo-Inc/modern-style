import { Component } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { IProduct } from "src/app/models/product"
import { ModalService } from "src/app/services/modal.service"
import { ProductService } from "src/app/services/products.service"

@Component({
  selector: "app-create-product-modal",
  templateUrl: "./create-product-modal.component.html",
  styleUrls: ["./create-product-modal.component.scss"],
})
export class CreateProductModalComponent {
  form = new FormGroup({
    title: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(3),
    ]),
  })

  constructor(
    private productService: ProductService,
    private modalService: ModalService
  ) {}

  submitHandler() {
    console.log(this.form.value)
    this.productService
      .create({
        title: this.form.value as string,
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      } as IProduct)
      .subscribe(() => {
        this.modalService.close()
      })
  }

  get title() {
    return this.form.controls.title
  }
}
