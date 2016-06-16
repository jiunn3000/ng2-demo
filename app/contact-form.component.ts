import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES} from '@angular/common';

@Component({
    selector: 'contact-form',
    directives: [FORM_DIRECTIVES],
    templateUrl: 'app/contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    log(x){
        console.log(x);
    }
    onSubmit(form){
        console.log(form);
    }
}
