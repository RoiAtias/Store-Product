import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './primeng.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { NumbersOnlyDirective } from './shared/directive/numbers-only.directive';
import { ProductItemComponent } from './shared/product/product-item/product-item.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductFilterComponent,
    NumbersOnlyDirective,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ProductFilterComponent,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    NumbersOnlyDirective,
  ],
})
export class SharedModule { }
