import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './primeng.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { NumbersOnlyDirective } from './Shared/directive/numbers-only.directive';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductFilterComponent,
    NumbersOnlyDirective,
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
    ProductDetailsComponent,
    ProductFilterComponent,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    NumbersOnlyDirective,
  ],
})
export class SharedModule { }
