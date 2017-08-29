import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormArray} from '@angular/forms';
import {TemplatesService} from "../../../services/templates/templates.service";

import {Product} from "../../../models/product";

import swal from 'sweetalert2';

@Component({
	selector : 'product-detail',
	template : require('./product_detail.template.html')
})
export class ProductDetailComponent implements OnInit{
    product : Product;
    productForm : FormGroup;
    categories : string[] = ['111', '222'];

    constructor (private fb : FormBuilder, private templateService : TemplatesService) {
        console.log(this.templateService);
        this.createForm();
    }

    ngOnInit(){
        //this.product = this.templateService.getProducts()[0];
        //this.product = new Product();
    }

    createForm() {
        this.productForm = this.fb.group({
            prdNo : '',
            selPrdCd : '',
            prdNm : '',
            brandNm : '',
            modelNm : '',
            createDate : '',
            categories : []
        })
    }

    onSubmit (formValue : any){
        console.log(this.productForm.value);

        swal({
            title: '저장하시겠습니까?',
            text: "저장된 정보는 삭제가 안됩니다",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '',
            cancelButtonColor: '',
            confirmButtonText: '저장',
            cancelButtonText: '취소',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).then(() => {
            this.templateService.setProducts(this.productForm.value);
            swal(
                '완료',
                '저장되었습니다',
                'success'
            )
        }, (dismiss) =>  {
            // dismiss can be 'cancel', 'overlay',
            // 'close', and 'timer'
            if (dismiss === 'cancel') {
                swal(
                    '취소',
                    '취소합니다 :)',
                    'error'
                )
            }
        });
    }
}