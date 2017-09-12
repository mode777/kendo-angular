import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChartModule } from '@progress/kendo-angular-charts';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PopupModule } from '@progress/kendo-angular-popup';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { UploadModule } from '@progress/kendo-angular-upload';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { ButtonsComponent } from "app/buttons.component";
import { ChartComponent } from "app/chart.component";
import { DateInputsComponent } from "app/dateinputs.component";
import { DialogComponent } from "app/dialog.component";
import { DropdownsComponent } from "app/dropdowns.component";
import { GridComponent } from "app/grid.component";
import { InputsComponent } from "app/inputs.components";
import { LabelComponent } from "app/label.component";
import { LayoutComponent } from "app/layout.component";
import { PopupComponent } from "app/popup.component";
import { RippleComponent } from "app/ripple.component";
import { ScrollViewComponent } from "app/scrollview.component";
import { SortableComponent } from "app/sortable.component";
import { UploadComponent } from "app/upload.component";
import { GridDirectivesComponent } from "app/grid-directives.component";
import { GridEditingDirectivesComponent } from "app/grid-editing-directives.component";
import { GridEditFormComponent } from "app/forms/grid-edit-form.component";
import { EditService } from "app/services/edit.service";
import { GridEditComponent } from "app/grid-edit.component";

const routes: Routes = [
  // basic
  { path: 'buttons', component: ButtonsComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'dateinputs', component: DateInputsComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'dropdowns', component: DropdownsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'label', component: LabelComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'popup', component: PopupComponent },
  { path: 'ripple', component: RippleComponent },
  { path: 'scrollview', component: ScrollViewComponent },
  { path: 'sortable', component: SortableComponent },
  { path: 'upload', component: UploadComponent },
  // advanced
  { path: 'grid-directives', component: GridDirectivesComponent },
  { path: 'grid-editing-directives', component: GridEditingDirectivesComponent },
  { path: 'grid-edit', component: GridEditComponent },
];


@NgModule({
  declarations: [
    AppComponent,

    // demos
    ButtonsComponent,
    ChartComponent,
    DateInputsComponent,
    DialogComponent,
    DropdownsComponent,
    GridComponent,
    InputsComponent,
    LabelComponent,
    LayoutComponent,
    PopupComponent,
    RippleComponent,
    ScrollViewComponent,
    SortableComponent,
    UploadComponent,
    GridDirectivesComponent,
    GridEditingDirectivesComponent,
    GridEditComponent,

    // forms
    GridEditFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,

    // kendo modules
    ButtonsModule,
    ChartModule,
    DateInputsModule,
    DialogModule,
    DropDownsModule,
    InputsModule,
    LabelModule,
    LayoutModule,
    PopupModule,
    RippleModule,
    ScrollViewModule,
    SortableModule,
    UploadModule,
    GridModule,
  ],
  providers: [
    EditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
