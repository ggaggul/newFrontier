import {Component, OnDestroy, OnInit} from '@angular/core';
import { GridOptions } from "ag-grid/main";
import {TemplatesService} from "../../../services/templates/templates.service"

@Component({
	selector : 'product-list',
	template : require('./product_list.template.html'),
    providers : [TemplatesService]
})
export class ProductListComponent implements OnInit{

    private gridOptions : GridOptions;

    constructor (private templatesService : TemplatesService ) {}

    public ngOnInit() : any {
        this.gridOptions = <GridOptions>{
            onGridReady: (params) => {
                params.api.sizeColumnsToFit();
            },
            columnDefs: this.createColumnDefs(),
            rowData: this.templatesService.getProducts(),
            floatingFilter:true
        };
    }

    private createColumnDefs() {
        return [
            {headerName: "상품번호", field: "prdNo",
                floatingFilterComponentParams:{
                    maxValue:7,
                    suppressFilterButton:true
                }, filter:'number', suppressMenu:true
            },
            {headerName: "판매자 상품코드", field: "selPrdCd",
                floatingFilterComponentParams:{
                    maxValue:7,
                    suppressFilterButton:true
                }, filter:'number', suppressMenu:true
            },
            {headerName: "상품명", field: "prdNm",
                floatingFilterComponentParams:{
                    maxValue:7,
                    suppressFilterButton:true
                }, filter:'text', suppressMenu:true
            },
            {headerName: "브랜드명", field: "brandNm",
                floatingFilterComponentParams:{
                    maxValue:7,
                    suppressFilterButton:true
                }, filter:'text', suppressMenu:true
            },
            {headerName: "모델명", field: "modelNm",
                floatingFilterComponentParams:{
                    maxValue:7,
                    suppressFilterButton:true
                }, filter:'text', suppressMenu:true
            }
        ];
    }

    public refreshRowData() {
        let rowData = this.templatesService.getProducts();
        this.gridOptions.api.setRowData(rowData);
    }

}