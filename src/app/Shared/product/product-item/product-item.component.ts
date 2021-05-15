import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit,OnChanges {

  @Input() productList: Array<Product>;
  @Input() selectedProduct: Product;

  @Output() changesSelectedProduct:EventEmitter<Product> = new EventEmitter<Product>();
  @Output() deleteProduct:EventEmitter<number> = new EventEmitter<number>();

  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
   if (changes.productList && changes.productList.currentValue) {
      this.productList = changes.productList.currentValue;
    }
  }

  ngOnInit(): void {
  }

  onDelete(event, productId: number){
    event.stopPropagation();
    this.deleteProduct.emit(productId);
  }

  onSelectProduct(product: Product) {
    this.changesSelectedProduct.emit(product);
  }



}
