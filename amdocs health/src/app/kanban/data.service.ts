import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  chartsdata : any = [
    {name : 'Pre Assembly Machine'},
    {name : 'Final Assembly Machine'},
    {name : 'Magnatic & HV Testing'},

 ]
 secondchartsdata : any = [
  {name : 'Switching & Calibration'},
  {name : 'Thermal Testing'},

]





}
