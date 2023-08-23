import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { ProductComponent } from "./components/product/product.component"
import { HttpClientModule } from "@angular/common/http"
import { GlobalErrorComponent } from "./components/global-error/global-error.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { SearchProductsPipe } from "./pipes/search-products.pipe"
import { ModalComponent } from "./components/modal/modal.component"
import { CreateProductModalComponent } from "./components/create-product-modal/create-product-modal.component";
import { FocusDirective } from './directives/focus.directive'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    SearchProductsPipe,
    ModalComponent,
    CreateProductModalComponent,
    FocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
