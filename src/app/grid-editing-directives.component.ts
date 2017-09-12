import { Component } from '@angular/core';
import { Product } from "app/models/product";
import { products } from "app/data/products";

@Component({
  selector: 'k-grid-editing-directives',
  template: `
    <form novalidate #myForm="ngForm">
          <kendo-grid
              [kendoGridTemplateEditing]="createNewProduct"
              [kendoGridBinding]="products"
              [height]="500"
              [pageSize]="10"
              [pageable]="true"
              [sortable]="true"
            >
            <ng-template kendoGridToolbarTemplate>
                <button kendoGridAddCommand>Add new</button>
            </ng-template>
            <kendo-grid-column field="ProductName" title="Product Name">
                <ng-template kendoGridEditTemplate let-dataItem="dataItem">
                    <input [(ngModel)]="dataItem.ProductName" name="ProductName" class="k-textbox" required/>
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" editor="numeric" title="Price">
                <ng-template kendoGridEditTemplate let-dataItem="dataItem">
                    <input [(ngModel)]="dataItem.UnitPrice" name="UnitPrice" class="k-textbox" type="number"/>
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="Discontinued" editor="boolean" title="Discontinued">
                <ng-template kendoGridEditTemplate let-dataItem="dataItem">
                    <input [(ngModel)]="dataItem.Discontinued" name="Discontinued" type="checkbox"/>
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" editor="numeric" title="Units In Stock">
                <ng-template kendoGridEditTemplate let-dataItem="dataItem">
                    <input [(ngModel)]="dataItem.UnitsInStock" name="UnitsInStock" required min="0" max="999" class="k-textbox" type="number"/>
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-command-column title="command" width="220">
                <ng-template kendoGridCellTemplate let-isNew="isNew">
                    <button kendoGridEditCommand class="k-primary">Edit</button>
                    <button kendoGridRemoveCommand>Remove</button>
                    <button kendoGridSaveCommand [disabled]="myForm.invalid">{{ isNew ? 'Add' : 'Update' }}</button>
                    <button kendoGridCancelCommand>{{ isNew ? 'Discard changes' : 'Cancel' }}</button>
                </ng-template>
            </kendo-grid-command-column>
          </kendo-grid>
      </form>
  `
})
export class GridEditingDirectivesComponent {
    public products: any[] = products;

    createNewProduct(): Product {
        return new Product();
    }
}
