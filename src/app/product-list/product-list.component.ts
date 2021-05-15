import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, MessageService } from 'primeng';
import { Product } from '../shared/models/product.model';
import { ProductService } from '../shared/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  productsArray: Product[] = [];
  filteredProductsArray: Product[] = [];
  selectedProduct: Product;

  constructor(private productService: ProductService,
    private confirmationService: ConfirmationService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProductList().subscribe((products: Product[]) => {
      this.productsArray = products;
      this.filteredProductsArray = products;
      if (this.filteredProductsArray) {
        this.selectedProduct = this.filteredProductsArray[0];
      }
    });
  }

  onDeleteProduct(productId: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the product?',
      accept: () => {
        debugger;
        var foundIndex = this.productsArray.findIndex(x => x.id == productId);
        if ((this.selectedProduct) && (this.selectedProduct.id == this.productsArray[foundIndex].id)) {
          this.selectedProduct = null;
        }
        this.filteredProductsArray.splice(foundIndex, 1);
        this.toastr.success('Deletion completed successfully!', 'Remove product');
      }
    });
  }

  onSelectProduct(product: Product) {
    this.selectedProduct = product;
  }

  onAddProduct() {
    this.selectedProduct = new Product();
  }

  onFilteredProductsList(products: Array<Product>) {
    this.filteredProductsArray = products;
  }

  onSave(product: Product) {
    // New Product
    if (!product.id) {
      const lastIndex = this.productsArray.length + 1
      product.id = lastIndex;
      this.productsArray.push(product);
      this.filteredProductsArray = this.productsArray;
      this.selectedProduct = product;
      this.toastr.success(`Added ${product.name} successfully!`, 'Added Product');
    }
    // Update Product
    else {
      var foundIndex = this.productsArray.findIndex(x => x.id == product.id);
      this.productsArray[foundIndex] = product;
      this.filteredProductsArray = this.productsArray;
      this.toastr.success(`Updated ${product.name} successfully!`, 'Updated Product');
    }
  }
}
