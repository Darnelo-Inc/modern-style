import { Component } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"

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

  submitHandler() {
    console.log(this.form.value)
  }

  get title() {
    return this.form.controls.title
  }
}
