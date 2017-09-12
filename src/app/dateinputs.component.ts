import { Component } from "@angular/core";

@Component({
    selector: 'k-dateinputs',
    styles: [ '.k-calendar { margin: 0 auto; }' ],
    template: `
        <div style="min-height: 450px;">
            <div>
                <p>DateInput</p>
                <kendo-dateinput [value]="value"></kendo-dateinput>
                <p>(use <code>←</code> and <code>→</code> to navigate, <code>↑</code> and <code>↓</code> to update)</p>
  
                <p>DatePicker</p>
                <kendo-datepicker [value]="value"></kendo-datepicker>
                <p>(use <code>Alt</code>+<code>↓</code> to open the Calendar)</p>
  
                <p>TimePicker</p>
                <kendo-timepicker
                    [value]="value"
                ></kendo-timepicker>
                <p>(use Alt+↓ to open the time list, Tab to move to the next time section in the popup, ↑ to increment and ↓ to decrement the value)</p>
            </div>
            <div>
                <p>Calendar</p>
                <kendo-calendar [value]="value"></kendo-calendar>
            </div>
        </div>
    `
  })
  export class DateInputsComponent {
      public value: Date = new Date();
  }