import { Component, OnInit } from "@angular/core"
import { IProduct } from "./models/product"
import { ProductService } from "./services/products.service"
import { Observable, tap } from "rxjs"
import { ErrorService } from "./services/error.service"
import { ModalService } from "./services/modal.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {}
