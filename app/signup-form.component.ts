import { Component, OnInit } from '@angular/core';
import { ControlGroup, Control, Validators, FormBuilder  } from '@angular/common';
import { UsernameValidators } from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignupFormComponent implements OnInit {


    // form1 = new ControlGroup({
    //     username: new Control('',Validators.required),
    //     password: new Control('',Validators.required)
    // });

    form : ControlGroup;

    constructor(fb:FormBuilder) { 
        this.form =   fb.group({
            username:['',Validators.compose([
                Validators.required, 
                UsernameValidators.cannotContainSpace 
                ]), UsernameValidators.shouldBeUnique ],
            password:['',Validators.required ]
        })
    }

    ngOnInit() { }


    signup(){
        // var result = authService.login(this.form.value)
        this.form.find('username').setErrors({
            invalidLogin:true
        });
         console.log(this.form.value);
    }

}