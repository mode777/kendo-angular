# kendo-angular
An example project of kendo ui controls for angular

## NOTE
You need a license for kendo ui professional.
All examples from [http://www.telerik.com/kendo-angular-ui/](http://www.telerik.com/kendo-angular-ui/)

## Documentation
http://www.telerik.com/kendo-angular-ui/

## Themes

### Default Theme
* Package: `@progress/kendo-theme-default`
* Import to `styles.scss`
```
@import "~@progress/kendo-theme-default/scss/all";
```
---
### Bootstrap Theme
Bootstrap theme is still in beta.
* Package: `@progress/kendo-theme-bootstrap`
* Peer-Dependencies 
    * `bootstrap`
* Import to `styles.scss`
```
@import "~bootstrap/scss/bootstrap";
@import "~@progress/kendo-theme-bootstrap/scss/all";
```
---

## Packages
Kendo UI contains several packages which can be used and installed independently from each other.

### Buttons
* Contains
    * Button
    * ButtonGroup
    * DropDownButton
    * SplitButton
* Package: `@progress/kendo-angular-buttons`
* Peer-Dependencies 
    * `@progress/kendo-angular-l10n`
    * `@angular/animations`
* Import Modules: 
    * `BrowserAnimationsModule`
    * `ButtonsModule`
---
### Charts
* Contains
    * Chart
    * Sparkline
    * StockChart
* Package: `@progress/kendo-angular-charts`
* Peer-Dependencies 
    * `@progress/kendo-angular-l10n`
    * `@angular/animations`
    * `@progress/kendo-drawing`
    * `hammerjs`
* Import Modules: 
    * `BrowserAnimationsModule`
    * `ChartsModule`
---
### DateInputs
* Contains
    * Calendar
    * DateInput
    * DatePicker
    * TimePicker
* Package: `@progress/kendo-angular-dateinputs`
* Peer-Dependencies 
    * `@progress/kendo-angular-l10n`
    * `@angular/animations`
    * `@progress/kendo-angular-intl`
* Import Modules: 
    * `BrowserAnimationsModule`
    * `DateInputsModule`
---
### Dialogs
Replaces **Window**
* Contains
    * Dialog
    * DialogService
* Package: `@progress/kendo-angular-dialog`
* Peer-Dependencies 
    * `@angular/animations`
* Import Modules: 
    * `BrowserAnimationsModule`
    * `DialogModule`
---
### Dropdowns
* Contains
    * AutoComplete
    * ComboBox
    * DropDownList
    * MultiSelect
* Package: `@progress/kendo-angular-dropdowns`
* Peer-Dependencies 
    * `@progress/kendo-angular-l10n`
    * `@angular/animations`
* Import Modules: 
    * `BrowserAnimationsModule`
    * `DropDownsModule`
---
### Grid
* Contains
    * Grid
* Package: `@progress/kendo-angular-grid`
* Peer-Dependencies
    * `@progress/kendo-angular-dropdowns` 
    * `@progress/kendo-angular-inputs` 
    * `@progress/kendo-angular-dateinputs` 
    * `@progress/kendo-data-query`
    * `@progress/kendo-angular-intl`
    * `@progress/kendo-angular-l10n`
    * `@progress/kendo-drawing`
    * `@progress/kendo-angular-excel-export`
    * `@angular/animations`
* Import Modules: 
    * `BrowserAnimationsModule`
    * `GridModule`
---
### Inputs
* Contains
    * MaskedTextBox
    * NumericTextBox
    * Slider
    * Switch
    * TextBox
    * (ColorPicker)
* Package: `@progress/kendo-angular-inputs`
* Peer-Dependencies 
    * `@progress/kendo-angular-l10n`
    * `@angular/animations`
* Import Modules: 
    * `BrowserAnimationsModule`
    * `InputsModule`
---
### Label
Needed to connect a `<label>` tag to the kendo input
* Package: `@progress/kendo-angular-label`
* Import Modules: 
    * `LabelModule`
---
### Layout
* Contains
    * PanelBar
    * TabStrip
* Package: `@progress/kendo-angular-layout`
* Peer-Dependencies 
    * `@angular/animations`
* Import Modules: 
    * `BrowserAnimationsModule`
    * `LayoutModule`
---
### Popup
* Contains
    * Popup
* Package: `@progress/kendo-angular-popup`
* Peer-Dependencies 
    * `@angular/animations`
* Import Modules: 
    * `BrowserAnimationsModule`
    * `PopupModule`
---
### Ripple
* Contains
    * kendoRippleContainer (directive)
* Package: `@progress/kendo-angular-ripple`
* Import Modules: 
    * `BrowserAnimationsModule`
    * `RippleModule`

### ScrollView
* Contains
    * ScrollView
* Package: `@progress/kendo-angular-scrollview`
* Peer-Dependencies 
    * `@angular/animations`
* Import Modules: 
    * `BrowserAnimationsModule`
    * `ScrollViewModule`
---
### Sortable
* Contains
    * Sortable
* Package: `@progress/kendo-angular-sortable`
* Peer-Dependencies 
    * `@angular/animations`
    * `@progress/kendo-angular-l10n`
* Import Modules: 
    * `BrowserAnimationsModule`
    * `SortableModule`
---
### Upload
* Contains
    * Upload
* Package: `@progress/kendo-angular-upload`
* Peer-Dependencies 
    * `@angular/animations`
    * `@progress/kendo-angular-l10n`
* Import Modules: 
    * `BrowserAnimationsModule`
    * `UploadModule`
---


