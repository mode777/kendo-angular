import { Component } from "@angular/core";

@Component({
    selector: 'k-popup',
    styles: [`
        .content {
            padding: 30px;
            color: #787878;
            background-color: #fcf7f8;
            border: 1px solid rgba(0,0,0,.05);
        }
        .example-wrapper {
            min-height: 100px;
        }
    `],
    template: `
        <div class="example-config">
          <button #anchor (click)="onToggle()" class="k-button">{{toggleText}} Popup</button>
        </div>
        <div class="example-wrapper">
          <kendo-popup [popupClass]="'content popup'" [anchor]="anchor" (anchorViewportLeave)="show = false" *ngIf="show">
              <!-- User-defined content -->
                  Popup content.
          </kendo-popup>
        </div>
    `
  })
  export class PopupComponent {
      private toggleText: string = "Hide";
      private show: boolean = true;
  
      public onToggle(): void {
          this.show = !this.show;
          this.toggleText = this.show ? "Hidе" : "Show";
      }
  }