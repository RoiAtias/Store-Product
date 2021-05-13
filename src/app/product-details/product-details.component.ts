import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormMode } from '../Shared/models/Enums/FormMode.enum';
import { Product } from '../Shared/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnChanges {

  @Input() selectedProduct: Product;
  
  @Output() submittedProduct: EventEmitter<Product> = new EventEmitter<Product>();


  public form: FormGroup;
  product: Product;
  submitted: boolean = false;
  emptyPreviewPic = "../../assets/Images/NoImage.png"

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      creationDate: new FormControl(''),
      thumbnailImage: new FormControl(''),
      urlImage: new FormControl(''),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedProduct && changes.selectedProduct.currentValue) {
      this.selectedProduct = changes.selectedProduct.currentValue;
      this.setData(this.selectedProduct);
    }
  }

  get f() { return this.form.controls; }

  ngOnInit(): void {
  }

  setData(data: Product): void {
    if (data) {
      this.form.reset();
      this.product = data;
      this.form.patchValue(this.product);
      if (this.product.creationDate) {
        this.form.get('creationDate').patchValue(this.formatDate(this.product.creationDate));
      }
    }
  }

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  onSave() {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }
      this.submittedProduct.emit(this.form.value);
  }

}
