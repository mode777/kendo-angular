import { Component } from '@angular/core';

@Component({
    selector: 'k-dialog',
    template: `
      <div class="example-wrapper">
        <button kendoButton *ngIf="!opened" (click)="open()">Open dialog</button>
        <kendo-dialog title="Please confirm" *ngIf="opened" (close)="close('cancel')">
            <p style="margin: 30px; text-align: center;">Are you sure you want to continue?</p>
            <kendo-dialog-actions>
                <button kendoButton (click)="close('no')">No</button>
                <button kendoButton (click)="close('yes')" primary="true">Yes</button>
            </kendo-dialog-actions>
        </kendo-dialog>
      </div>
    `
})
export class DialogComponent {
    public opened: boolean = true;

    public close(status) {
      console.log(`Dialog result: ${status}`);
      this.opened = false;
    }

    public open() {
      this.opened = true;
    }
}

