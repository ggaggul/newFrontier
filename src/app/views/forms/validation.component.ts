import { Component, Input } from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators, FormControl} from '@angular/forms';
import {createNumberMask} from "text-mask-addons/dist/textMaskAddons";
import emailMask from 'text-mask-addons/dist/emailMask';

function positiveNumberValidator (control : FormControl) : any {
    if (!control.value) return null;

    const price = parseInt(control.value);
    return price == null || typeof price === 'number' && price > 0
        ? null
        : {positivenumber: true}
}

/**
 * FormControl에 입력된 SSN이 유효하면 true를 반환하고, 유효하지 않으면 false를 반환한다.
 */
function ssnValidator (control : FormControl) : { [key : string] : any } {
    const value : string = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : { ssn : true };
}

/**
 * 모든 FormControl에 입력된 값이 같으면 true를 반환하고,
 * 다른 값이 있으면 false를 반환한다.
 */
function equalValidator ({ value } : FormGroup) : { [key : string] : any } {
    const [first, ...rest] = Object.keys(value || {});
    const valid = rest.every(v => value[v] === value[first]);
    return valid ? null : { equal : true };
}

@Component({
    selector: 'validation',
    template: require('./validation.template.html')
})

export class ValidationComponent{

    validationForm : FormGroup;
    formModel : FormGroup;
    dataInput1 : any;
    dataInput2 : any;
    dataInput3 : any;
    dataInput4 : any;
    dataInput5 : any;

    phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    phoneMaskWithCountryCode = ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    dateMaks = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    usDollarMask = createNumberMask({
        prefix: '$',
        suffix: ''
    });
    emailMask = emailMask;

    constructor (private fb : FormBuilder) {
        this.createForm();
    }

    ngOnInit(){

    }

    onSubmit () {
        console.log(this.validationForm.value);
    }

    //angular validation
    createForm() {
        this.validationForm = this.fb.group({
            validation1 : '',
            validation2 : '',
            validation3 : '',
            validation4 : '',
            validation5 : ''
        });

        this.formModel = new FormGroup({
            'username' : new FormControl('', Validators.required),
            'ssn' : new FormControl('123456789', ssnValidator),
            'passwordsGroup' : new FormGroup({
                'password' : new FormControl('', Validators.minLength(5)),
                'pconfirm' : new FormControl('')
            }, equalValidator)
        });
    }

    onSubmit1 () {
        if (this.formModel.valid) {
            console.log(this.formModel.value);
        }
    }
}
