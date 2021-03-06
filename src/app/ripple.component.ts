import { Component } from "@angular/core";

@Component({
    selector: 'k-ripple',
    template: `
        <div class="example-wrapper">

            <div kendoRippleContainer> <!-- You can apply this directive to any container element -->

                <div class="row">
                    <div class="col-xs-12 col-sm-4 example-col">
                        <p>Ripple on Buttons</p>
                        <button class="k-button">Default Button</button><br />
                        <button class="k-button k-primary">Primary Button</button><br />
                        <button class="k-button k-bare">Bare Button</button>
                    </div>
                    <div class="col-xs-12 col-sm-4 example-col">
                        <p>Ripple on Checkboxes</p>
                        <p style="line-height: 2.5em;">
                            <input type="checkbox" id="c1" class="k-checkbox" />
                            <label class="k-checkbox-label" for="c1">Checkbox 1</label><br/>
                            <input type="checkbox" id="c2" class="k-checkbox" />
                            <label class="k-checkbox-label" for="c2">Checkbox 2</label><br/>
                            <input type="checkbox" id="c3" class="k-checkbox" />
                            <label class="k-checkbox-label" for="c3">Checkbox 3</label>
                        </p>
                    </div>
                    <div class="col-xs-12 col-sm-4 example-col">
                        <p>Ripple on Radio Buttons</p>
                        <p style="line-height: 2.5em;">
                            <input type="radio" id="r1" name="rg" class="k-radio" checked />
                            <label class="k-radio-label" for="r1">Radio 1</label><br />
                            <input type="radio" id="r2" name="rg" class="k-radio" />
                            <label class="k-radio-label" for="r2">Radio 2</label><br />
                            <input type="radio" id="r3" name="rg" class="k-radio" />
                            <label class="k-radio-label" for="r3">Radio 3</label>
                        </p>
                    </div>
                </div>

            </div>

        </div>
    `,
    styles: [`
        button, input {
          margin: 1em 0;
        }
    `]
})
export class RippleComponent {
}