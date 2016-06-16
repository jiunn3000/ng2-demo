import { Component,ViewEncapsulation } from '@angular/core';
import { HTTP_PROVIDERS, Http, Response } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ContactFormComponent } from './contact-form.component';
import { SignupFormComponent } from './signup-form.component';

@Component({
    selector: 'my-app',
    directives:[SignupFormComponent],
    template: `
        <signup-form></signup-form>
     `,
    providers: [HTTP_PROVIDERS],
    styleUrls: ['app/app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    pageTitle: string = 'Hello World';
    constructor(private _http : Http) {
        
    }
}
