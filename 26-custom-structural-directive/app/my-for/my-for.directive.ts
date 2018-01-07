// import the directive
import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';
// create decorator.
@Directive({
  // multiple selectors
  selector: '[myFor][myForOf]'
})
//create class
export class MyForDirective {
  // Create an input for ngFor
  @Input()
  set myForOf(collection) {
    // Destroy our existing view container
    this.view.clear();
    collection.forEach((item, index) => {
      // create an embeddedView with reference to template
      this.view.createEmbeddedView(this.template, {
        // implicit value is the item = takes the item that is our object
        $implicit: item,
        // apply index to our object. Es6 shorthand
        index
      });
    });
  }

  // 2 things we need ViewContainerRef and TemplateRef
  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

}
