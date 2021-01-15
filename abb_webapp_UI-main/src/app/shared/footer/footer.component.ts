import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  footerData= [{
    "neewee_icon":"../assets/png/neewee_logo.png",
    "version":"v2.1.0",
    "copyright":"©2020-2021"}]; 
}
