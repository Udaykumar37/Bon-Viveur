import { Directive, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
    // @HostBinding('class') cssClass;
    // isClicked: boolean = false;

    // ngOnInit(): void {
    //     this.cssClass = 'none'
    // }

    // @HostListener('click') onClick () {
    //     this.isClicked = !this.isClicked
    //     if(this.isClicked) {
    //         this.cssClass = 'open'
    //     } else {
    //         this.cssClass = 'none'
    //     }
    // }

    //  (or)
    @HostBinding('class.open') isOpen = false;

    ngOnInit(): void {
    }

    @HostListener('click') toggleOpen () {
        this.isOpen = !this.isOpen;
    }
}