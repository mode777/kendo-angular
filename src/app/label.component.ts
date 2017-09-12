import { Component } from "@angular/core";

@Component({
    selector: 'k-label',
    template: `
     <div class="example-config">
       Click on the label text to focus the associated input.
     </div>
     <div class="row example-wrapper" style="min-height: 450px;">
       <div class="col-xs-12 col-md-6 example-col">
         <label [for]="datepicker">DatePicker: </label>
         <kendo-datepicker #datepicker></kendo-datepicker>
       </div>
  
      <div class="col-xs-12 col-md-6 example-col">
        <label [for]="'input'">Input: </label>
        <input id="input" />
      </div>
    </div>
    `
  })
  export class LabelComponent { }