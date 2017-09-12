import { Component } from '@angular/core';

@Component({
  selector: 'k-upload',
  template: `
  <kendo-upload
    [saveUrl]="uploadSaveUrl"
    [removeUrl]="uploadRemoveUrl">
  </kendo-upload>
  `
})
export class UploadComponent {
  uploadSaveUrl: string = "saveUrl";
  uploadRemoveUrl: string = "removeUrl";
}