import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    $(".progress-bar").animate({
      width: "95%"
  }, 2500);
  $(".perf-bar").animate({
    width: "85%"
}, 2500);
$(".quality-bar").animate({
  width: "75%"
}, 2500);

    console.log(this.line_metrics_data[0])
    // console.log(this.line_metrics_data[1])
    // console.log(this.line_metrics_data[2])
  }

  redirectURL(){
    this.router.navigate(['kpiDashboard/line']);
  }
  
  apq_data={"availability":85,"performance":75,"quality":95}

  line_metrics_data=[{'mcb':{
    'global_yield_percent': 92,
    'actual_cycle_time': 1.45,
    'capacity_utilization_percent': 92,
    'good_count': 220000,
    'bad_count': 2300,
    'target':250000,
  }},
  
 { 'rccb':{
    'global_yield_percent': 92,
    'actual_cycle_time': 1.45,
    'capacity_utilization_percent': 92,
    'good_count': 220000,
    'bad_count': 2300,
    'target':250000,
  }},
  
  {'switches':{
    'global_yield_percent': 92,
    'actual_cycle_time': 1.45,
    'capacity_utilization_percent': 92,
    'good_count': 220000,
    'bad_count': 2300,
    'target':250000,
  }},
]

  // getAPQ(){

  //   if(this.apq_data.availability>=90){
  //     document.getElementById('availability-bar').style.backgroundImage='-webkit-linear-gradient(right, #66ffa6, #00b248)';
  //   }else if(this.apq_data.availability>=80 && this.apq_data.availability<90){
  //     document.getElementById('availability-bar').style.backgroundImage='-webkit-linear-gradient(right, #ffd54f, #ff6f00)';
  //   }else{
  //     document.getElementById('availability-bar').style.backgroundImage='-webkit-linear-gradient(right,#ff7043, #dd2c00)';
  //   }

  //   if(this.apq_data.performance>=90){
  //     document.getElementById('performance-bar').style.backgroundImage='-webkit-linear-gradient(right, #66ffa6, #00b248)';
  //   }else if(this.apq_data.performance>=80 && this.apq_data.performance<90){
  //     document.getElementById('performance-bar').style.backgroundImage='-webkit-linear-gradient(right, #ffd54f, #ff6f00)';
  //   }else{
  //     document.getElementById('performance-bar').style.backgroundImage='-webkit-linear-gradient(right,#ff7043, #dd2c00)';
  //   }

  //   if(this.apq_data.quality>=90){
  //     document.getElementById('quality-bar').style.backgroundImage='-webkit-linear-gradient(right, #66ffa6, #00b248)';
  //   }else if(this.apq_data.quality>=80 && this.apq_data.quality<90){
  //     document.getElementById('quality-bar').style.backgroundImage='-webkit-linear-gradient(right, #ffd54f, #ff6f00)';
  //   }else{
  //     document.getElementById('quality-bar').style.backgroundImage='-webkit-linear-gradient(right,#ff7043, #dd2c00)';
  //   }
  // }


  tiles_data=[
    {"name":"Summary View","img":"/assets/png/summary.png", "url": "summaryView"},
    {"name":"Plant View","img":"/assets/png/factory.png", "url": "plantView"},
    {"name":"Digital Threads","img":"/assets/png/digital.png", "url": "digitalThreads"},
    {"name":"Data Matrix","img":"/assets/png/matrix.png", "url": "dataMatrix"},
    {"name":"Digital Logbook","img":"/assets/png/logbook.png", "url": "digitalLogbook"},
    {"name":"Reports & Trends","img":"/assets/png/reports.png", "url": "productionReports"},
    ]

    navigateView(url){
      this.router.navigate([url])
    }
}

