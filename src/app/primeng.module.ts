import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CalendarModule, CardModule, ChartModule, ConfirmationService, ConfirmDialogModule, DialogModule, DialogService, DropdownModule, DynamicDialogModule, MessageModule, MessagesModule, TableModule, ToastModule } from 'primeng';



@NgModule({
  declarations: [],
  imports: [
    ChartModule,
    CardModule,
    TableModule,
    CalendarModule,
    DynamicDialogModule,
    ToastModule,
    ButtonModule,
    DropdownModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers:[
    DialogService,
    ConfirmationService
   ],
   exports:[
    CardModule,
    TableModule,
    CalendarModule,
    DynamicDialogModule,
    ToastModule,
    ButtonModule,
    DropdownModule,
    ConfirmDialogModule
  ],
})
export class PrimengModule { }
