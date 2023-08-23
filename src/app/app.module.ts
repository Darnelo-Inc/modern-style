import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { ProductComponent } from "./components/product/product.component"
import { HttpClientModule } from "@angular/common/http"
import { GlobalErrorComponent } from "./components/global-error/global-error.component"
import { FormsModule } from "@angular/forms";
import { SearchProductsPipe } from './pipes/search-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductModalComponent } from './components/create-product-modal/create-product-modal.component'

@NgModule({
  declarations: [AppComponent, ProductComponent, GlobalErrorComponent, SearchProductsPipe, ModalComponent, CreateProductModalComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
