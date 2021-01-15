import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  firstbuttonclicked=true;
firstbutton()
{
  if (this.firstbuttonclicked == true){
    this.firstbuttonclicked= false;
  }

}

secondbutton(){
  if(this.firstbuttonclicked==false){
    this.firstbuttonclicked = true;
  }
}
    
}
