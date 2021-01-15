import { Component, OnInit } from '@angular/core';
import { LineChartComponent } from '@swimlane/ngx-charts';
import {  Input, OnChanges, SimpleChanges } from '@angular/core';
import Tabulator from 'tabulator-tables';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  tabledata3 = [
    {id:1, name:"hhhh" , data_type:"text"},
    {id:2, name:"-" , data_type:"-"},
    {id:3, name:"-" , data_type:"-"},
    {id:4, name:"-" , data_type:"-"},
  ]
  controlParameterTable;

  constructor() { }
  ngOnInit() {
    this.parameterTable()
  }
 
  parameterTable(){
    this.controlParameterTable = new Tabulator("#cparameterTable" , {
      placeholder: "No Parameters(s) Available!",
      responsiveLayout:false,
      layout: "fitColumns",
      
      tooltips: true,
      height: 'inherit',
      data:this.tabledata3,
      dataTree:true,
      dataTreeChildField:"child",
      paginationSize: 5,
   
      columns: [
        
   
        {title:" ID", field:"name", hozAlign:"center"},
         {title:"R", field:"data_type", hozAlign:"center"},
         {title:" Q", field:"name", hozAlign:"center"},
         {title:"Cycle Time", field:"name", hozAlign:"center"},
         {title:"OK", field:"name", hozAlign:"center"},
         {title:" NOT-OK", field:"name", hozAlign:"center"},
        
     ],
    });
   
   }
  

}
