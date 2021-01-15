import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more.src';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

@Component({
  selector: 'app-kpi-dashboard',
  templateUrl: './kpi-dashboard.component.html',
  styleUrls: ['./kpi-dashboard.component.scss']
})
export class KpiDashboardComponent implements OnInit {


  minRange:Date[];
  name: String = "name";
  public bsConfig: any ={};
  myForm: FormGroup;

  line= 'MCB Automated';

  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    HighchartsMore(Highcharts);
    HighchartsSolidGauge(Highcharts);
    this.myForm = this.formBuilder.group({
      birthdate: null
    });
  }


  ranges: any = [{
    value: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()],
    label: 'Last 7 Days'
  }, {
    value: [new Date(), new Date(new Date().setDate(new Date().getDate() + 7))],
    label: 'Next 7 Days'
  }];

}
