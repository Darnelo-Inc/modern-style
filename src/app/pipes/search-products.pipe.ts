import { IProduct } from "../models/product"
import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
  name: "searchProducts",
})
export class SearchProductsPipe implements PipeTransform {
  transform(products: IProduct[], search: string): IProduct[] {
    return search.length
      ? products.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
      : products
  }
}
