import { Component } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import {PartialMatchFilterComponent} from "../../components/grid/partial_match_filter.component"

@Component({
  selector: 'grid',
  template: require('./grid.template.html')
})

export class GridComponent {

  public gridOptions : GridOptions;
  public gridOptionsFiltered : GridOptions;
  public gridOptionsFloatingFilter : GridOptions;

  constructor() {

    this.gridOptions = <GridOptions>{
      onGridReady: () => {
          this.gridOptions.api.sizeColumnsToFit();
      }
    };
    //this.gridOptions = <GridOptions>{};
    this.gridOptions.rowData = this.createRowData();
    this.gridOptions.columnDefs = this.createColumnDefs();
    this.gridOptions.enableFilter = true;
    this.gridOptions.enableColResize =  true;

  this.gridOptionsFiltered = <GridOptions>{
      onGridReady: () => {
          this.gridOptionsFiltered.api.sizeColumnsToFit();
      }
  };
    this.gridOptionsFiltered.rowData = this.createRowData();
    this.gridOptionsFiltered.columnDefs = this.createColumnDefsFiltered();
    this.gridOptionsFiltered.enableFilter = true;


      this.gridOptionsFloatingFilter = <GridOptions>{
          columnDefs: this.createColumnDefsFloatingFilter(),
          rowData: this.createRowDataFloatingFilter(),
          onGridReady: function (params) {
              params.api.sizeColumnsToFit();
          },
          floatingFilter:true
      }

  }

  private createRowData() {
    return [
        {"row": "Row 1", "name": "Michael Phelps"},
        {"row": "Row 2", "name": "Natalie Coughlin"},
        {"row": "Row 3", "name": "Aleksey Nemov"},
        {"row": "Row 4", "name": "Alicia Coutts"},
        {"row": "Row 5", "name": "Missy Franklin"},
        {"row": "Row 6", "name": "Ryan Lochte"},
        {"row": "Row 7", "name": "Allison Schmitt"},
        {"row": "Row 8", "name": "Natalie Coughlin"},
        {"row": "Row 9", "name": "Ian Thorpe"},
        {"row": "Row 10", "name": "Bob Mill"},
        {"row": "Row 11", "name": "Willy Walsh"},
        {"row": "Row 12", "name": "Sarah McCoy"},
        {"row": "Row 13", "name": "Jane Jack"},
        {"row": "Row 14", "name": "Tina Wills"}
    ]
  }

    private createColumnDefs() {
        return [
            {headerName: "Row", field: "row", width: 400},
            {
                headerName: "Filter Component",
                field: "name",
                width: 400,
                menuTabs: ['filterMenuTab']
            }
        ];
    }

    private createColumnDefsFiltered() {
        return [
            {headerName: "Row", field: "row", width: 400},
            {
                headerName: "Filter Component",
                field: "name",
                filterFramework: PartialMatchFilterComponent,
                width: 400,
                menuTabs: ['filterMenuTab']
            }
        ];
    }

    private createColumnDefsFloatingFilter() {
        return [
            {headerName: "Country", field: "country",
                floatingFilterComponentParams:{
                    maxValue:7,
                    suppressFilterButton:true
                }, filter:'text', suppressMenu:true
            },
            {headerName: "Language", field: "language",
                floatingFilterComponentParams:{
                    maxValue:7,
                    suppressFilterButton:true
                }, filter:'text', suppressMenu:true
            },
            {headerName: "Name", field: "name",
                floatingFilterComponentParams:{
                    maxValue:7,
                    suppressFilterButton:true
                }, filter:'text', suppressMenu:true
            },
            {headerName: "Gold", field: "gold",
                floatingFilterComponentParams:{
                    maxValue:7,
                    suppressFilterButton:true
                }, filter:'number', suppressMenu:true
            },
            {headerName: "Silver", field: "silver", filter:'number',
                floatingFilterComponentParams:{
                    maxValue:5,
                    suppressFilterButton:true
                }, suppressMenu:true
            },
            {headerName: "Bronze", field: "bronze", filter:'number',
                floatingFilterComponentParams:{
                    maxValue:10,
                    suppressFilterButton:true
                },suppressMenu:true
            }
        ];
    }

    private createRowDataFloatingFilter() {
        return [
            {country: "United States", language: "English", name: "Bob", gold: 1, silver: 3, bronze: 0},
            {country: "United States", language: "English", name: "Jack", gold: 0, silver: 1, bronze: 1},
            {country: "United States", language: "English", name: "Sue", gold: 3, silver: 0, bronze: 1},
            {country: "United Kingdom", language: "English", name: "Mary", gold: 1, silver: 1, bronze: 2},
            {country: "United Kingdom", language: "English", name: "Tess", gold: 2, silver: 1, bronze: 1},
            {country: "United Kingdom", language: "English", name: "John", gold: 0, silver: 2, bronze: 1},
            {country: "Jamaica", language: "English", name: "Bob", gold: 4, silver: 1, bronze: 2},
            {country: "Jamaica", language: "English", name: "Jack", gold: 3, silver: 1, bronze: 2},
            {country: "Jamaica", language: "English", name: "Mary", gold: 1, silver: 1, bronze: 2},
            {country: "South Africa", language: "English", name: "Bob", gold: 4, silver: 0, bronze: 1},
            {country: "South Africa", language: "English", name: "Jack", gold: 3, silver: 0, bronze: 1},
            {country: "South Africa", language: "English", name: "Mary", gold: 5, silver: 3, bronze: 1},
            {country: "South Africa", language: "English", name: "John", gold: 2, silver: 3, bronze: 1},
            {country: "New Zealand", language: "English", name: "Bob", gold: 5, silver: 3, bronze: 10},
            {country: "New Zealand", language: "English", name: "Jack", gold: 1, silver: 1, bronze: 1},
            {country: "New Zealand", language: "English", name: "Sue", gold: 1, silver: 3, bronze: 1},
            {country: "Australia", language: "English", name: "Mary", gold: 1, silver: 1, bronze: 3},
            {country: "Australia", language: "English", name: "Tess", gold: 2, silver: 1, bronze: 1},
            {country: "Australia", language: "English", name: "John", gold: 3, silver: 2, bronze: 1},
            {country: "Canada", language: "English", name: "Bob", gold: 7, silver: 5, bronze: 3},
            {country: "Canada", language: "English", name: "Jack", gold: 2, silver: 1, bronze: 3},
            {country: "Canada", language: "English", name: "Mary", gold: 0, silver: 1, bronze: 3},
            {country: "Switzerland", language: "French", name: "Bob", gold: 2, silver: 3, bronze: 1},
            {country: "Switzerland", language: "French", name: "Jack", gold: 2, silver: 3, bronze: 1},
            {country: "Switzerland", language: "French", name: "Mary", gold: 1, silver: 3, bronze: 1},
            {country: "Switzerland", language: "French", name: "John", gold: 1, silver: 4, bronze: 1},
            {country: "Spain", language: "Spanish", name: "Bob", gold: 1, silver: 4, bronze: 0},
            {country: "Spain", language: "Spanish", name: "Jack", gold: 0, silver: 1, bronze: 1},
            {country: "Spain", language: "Spanish", name: "Sue", gold: 1, silver: 4, bronze: 1},
            {country: "Portugal", language: "Portuguese", name: "Mary", gold: 2, silver: 1, bronze: 4},
            {country: "Portugal", language: "Portuguese", name: "Tess", gold: 3, silver: 1, bronze: 1},
            {country: "Portugal", language: "Portuguese", name: "John", gold: 5, silver: 2, bronze: 1},
            {country: "Zimbabwe", language: "English", name: "Bob", gold: 3, silver: 1, bronze: 4},
            {country: "Zimbabwe", language: "English", name: "Jack", gold: 4, silver: 1, bronze: 4},
            {country: "Zimbabwe", language: "English", name: "Mary", gold: 2, silver: 1, bronze: 4},
            {country: "Brazil", language: "Brazillian", name: "Bob", gold: 3, silver: 4, bronze: 1},
            {country: "Brazil", language: "Brazillian", name: "Jack", gold: 2, silver: 4, bronze: 1},
            {country: "Brazil", language: "Brazillian", name: "Mary", gold: 4, silver: 0, bronze: 1},
            {country: "Brazil", language: "Brazillian", name: "John", gold: 1, silver: 0, bronze: 1}];
    }

}
