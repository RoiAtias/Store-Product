import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SelectItem } from 'primeng';
import { SortOption } from '../shared/models/Enums/sortOption.enum';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit, OnChanges {

  @Input() products: Array<Product>;
  @Output() addProduct: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchProduct: EventEmitter<Array<Product>> = new EventEmitter<Array<Product>>();
  
  filteredProducts: Array<Product> = [];

  sortOptions: SelectItem[];
  selectedOption: SelectItem;
  searchName: string;
  sortOption = SortOption
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.products && !changes.products.firstChange) {
      this.products = changes.products.currentValue;
      this.filteredProducts = this.products;
    }
  }

  ngOnInit(): void {
  this.sortOptions = [
      { label: 'Price: highest first', value: this.sortOption.Highest },
      { label: 'Price: lowest first', value: this.sortOption.Lowest },
    ];
  }

  changeSortOption(option) {
    if (option === this.sortOption.Highest) {
      this.filteredProducts = this.filteredProducts.sort((a: Product, b: Product) => {
        return b.price - a.price
      });
    } else {
      this.filteredProducts = this.filteredProducts.sort((a: Product, b: Product) => {
        return a.price - b.price
      });
    }
  }

  filterItem(value) {
    if (!value) {
      this.assignCopy();
      this.searchProduct.emit(this.filteredProducts);
    }
    this.filteredProducts = Object.assign([], this.products).filter(
      item => (item.name.toLowerCase().indexOf(value.toLowerCase()) > -1) || (item.name.toLowerCase().indexOf(value.toLowerCase()) > -1));
      this.searchProduct.emit(this.filteredProducts);
  }

  assignCopy() {
    this.filteredProducts = Object.assign([], this.products);
  }

  onAddProduct() {
    this.addProduct.emit(true);
  }

}
