import { Component } from '@angular/core';

@Component({
    selector: 'k-inputs',
    template: `
    <div class="example-wrapper">
        <div class="row">
            <div class="col-xs-12 col-sm-6 example-col">
                <p>MaskedTextBox</p>
                <kendo-maskedtextbox
                    [(ngModel)]="maskedValue"
                    [mask]="'9-000'"
                ></kendo-maskedtextbox>
            </div>
            <div class="col-xs-12 col-sm-6 example-col">
                <p>NumericTextBox</p>
                <kendo-numerictextbox
                    [(ngModel)] = "numericValue"
                ></kendo-numerictextbox>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-6 example-col">
                <p>Slider (value = {{sliderValue}})</p>
                <kendo-slider
                    [min]="min"
                    [max]="max"
                    [smallStep]="smallStep"
                    [(ngModel)] = "sliderValue"
                ></kendo-slider>
            </div>
            <div class="col-xs-12 col-sm-6 example-col">
                <p>Switch</p>
                <kendo-switch [(ngModel)]="switchValue"></kendo-switch>
            </div>
            <div class="col-xs-12 col-sm-6 example-col">
                <p>TextBox</p>
                <kendo-textbox-container floatingLabel="First name">
                  <input kendoTextBox />
                </kendo-textbox-container>
            </div>
        </div>
    </div>
    `
})

export class InputsComponent {
    public maskedValue: string;
    public sliderValue: number = 5;
    public numericValue: number = 5;
    public switchValue: boolean = false;
    public min: number = 0;
    public max: number = 10;
    public smallStep: number = 1;
}
