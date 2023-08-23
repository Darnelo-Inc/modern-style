import { AfterViewInit, Directive, ElementRef, OnInit } from "@angular/core"

@Directive({
  selector: "[appFocus]",
})
export class FocusDirective implements OnInit, AfterViewInit {
  constructor(private elem: ElementRef) {}

  ngOnInit(): void {
    this.elem.nativeElement.focus()
  }
  ngAfterViewInit(): void {
    // this.elem.nativeElement.focus()
  }
}
