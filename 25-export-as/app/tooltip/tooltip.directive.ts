// what ExportAs property of directive does
import { Input, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  // Tooltip directive
  selector: '[tooltip]',
  // export as name of directive. use this along side a template ref in our component
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {
  // creates a DOM node
  tooltipElement = document.createElement('div');
  // Setting visibility
  visible = false;

  // Got input
  @Input()
  // set property = Typescript - Setter
  set tooltip(value) {
    // padding value to the textContent
    this.tooltipElement.textContent = value;
  }

  // Remove class name
  hide() {
    this.tooltipElement.classList.remove('tooltip--active');
  }

  // add class name
  show() {
    this.tooltipElement.classList.add('tooltip--active');
  }

  constructor(
    private element: ElementRef
  ) {}

  ngOnInit() {
    // apply classname to tooltip
    this.tooltipElement.className = 'tooltip';
    // grabbing the element that we're binding the directive too
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');
  }
}
