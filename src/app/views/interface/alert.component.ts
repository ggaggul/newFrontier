import { Component } from '@angular/core';
import swal from 'sweetalert2';
//declare var SweetAlert:any;
import { Http } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
    selector: 'interface-alert',
    template: require('./alert.template.html')
})

export class AlertComponent{
    constructor(private http: Http) {
    }

    demo1 = function () {
        swal('Welcome in Alerts');
    }

    demo2 = function () {
        swal('Good job!', 'You clicked the button!', 'success');
    }

    demo3 = function () {
        swal('The Internet?', 'That thing is still around!', 'warning'); //warning, error, success, info and question
    }


    demo4 = function () {
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).then(function () {
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }, function (dismiss) {
            // dismiss can be 'cancel', 'overlay',
            // 'close', and 'timer'
            if (dismiss === 'cancel') {
                swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        });
    }

    demo5 = function () {
        swal({
            title: 'Submit email to run ajax request',
            input: 'email',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: function (email) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function() {
                        if (email === 'taken@example.com') {
                            reject('This email is already taken.')
                        } else {
                            resolve()
                        }
                    }, 2000)
                })
            },
            allowOutsideClick: false
        }).then(function (email) {
            swal({
                type: 'success',
                title: 'Ajax request finished!',
                html: 'Submitted email: ' + email
            })
        })
    }

    demo6 = function () {
        swal.queue([{
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text:
            'Your public IP will be received ' +
            'via AJAX request',
            showLoaderOnConfirm: true,
            /*preConfirm: function () {
                return new Promise(function (resolve) {
                    this.http.get('https://api.ipify.org?format=json').subscribe(data => {
                        swal.insertQueueStep(data.ip);
                        resolve()
                    });
                    /!*$.get('https://api.ipify.org?format=json')
                        .done(function (data) {
                            swal.insertQueueStep(data.ip)
                            resolve()
                        })*!/
                })
            }*/

            preConfirm: function () {
                return this.http.get('https://api.ipify.org?format=json')
                    .map(res => res.json())
                    .subscribe(data => {
                        swal.insertQueueStep(data.ip);
                    });

            }
        }]);
    }
}
