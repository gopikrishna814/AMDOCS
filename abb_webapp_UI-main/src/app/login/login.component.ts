import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { UserInfo } from '../model/userInfo.model';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/service/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router,
    private toastr: ToastrService,private userInfo:UserInfo,private routeReturn: ActivatedRoute) { }

  headerData= [{
    "bodhee_icon":"..\assets\png\bodhee-sm.png"}]; 

    footerData= [{
      "neewee_icon":"../assets/png/neewee_logo.png",
      "version":"v2.1.0",
      "copyright":"©2020-2021"}]; 
  
  ngOnInit() {
  }

  userDet;
  userDetails = new FormGroup({
    emailId: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]),
    password: new FormControl('',[
      Validators.required,
    ])
    }); 
    // user:User = new User();
    returnUrl:string="";

    get emailId(){
      return this.userDetails.get('emailId')
    }
    
    get password(){
      return this.userDetails.get('password')
    }

    onSignIn(){
      //will return token as response
      var errorMsg: string = '';
  
    this.auth.onSignIn(this.emailId.value,this.password.value).subscribe((event: HttpEvent<any>) => {
    switch (event.type) {
    case (HttpEventType.Sent):
    // // console.log('Request Sent');
    break;
    case (HttpEventType.Response):
    // // console.log('Received Response');
    // // console.log("sign in successful ",event.body);
    localStorage.setItem("auth_token",event.body.authToken)
    localStorage.setItem("emailId",this.emailId.value)
    // // console.log("local storage",localStorage.getItem("auth_token"))
    this.getUserDetails();
  
    break;
        } 
     
        },(err: HttpErrorResponse) => {
          this.toastr.error("Please check your Login Details!")
    // console.log(err);
    if (err.status == 500) {
    errorMsg = err.error.errorMsg;
          } else {
    errorMsg = err.error.error;
          }
          
        });
    }
    getUserDetails(){
      //will get user Details on positive response of onSignIn()
      var errorMsg: string = '';
  
    this.auth.getUserDetails(localStorage.getItem("auth_token")).subscribe((event: HttpEvent<any>) => {
    switch (event.type) {
    case (HttpEventType.Sent):
    // // console.log('Request Sent');
    break;
    case (HttpEventType.Response):
    // // console.log('Received Response');
    // // console.log("user details ",event.body);
    this.userDet = event.body;
    this.userInfo.name = this.userDet.name;
    this.userInfo.roleId = this.userDet.roleId;
    this.userInfo.mail = this.userDet.mail;
    this.userInfo.tenantId = this.userDet.tenantId;
    this.userInfo.userId = this.userDet.userId;
    this.userInfo.icon = this.userDet.icon;
    this.userInfo.icon_bg = this.userDet.icon_bg;
    this.userInfo.roleName = this.userDet.roleName;
    this.userInfo.newUser = this.userDet.newUser;
    if(this.returnUrl != ""){
      this.route.navigate([this.returnUrl]);
    }
    else{
      this.route.navigate(['/dashboard']);
    }
    // this.logger.info("User ID ",this.userInfo.userId," is logged in!");
    // this.toastr.success("Welcome "+this.userInfo.name+"!");
    break;
        } 
     
        },(err: HttpErrorResponse) => {
    // console.log(err);
    if (err.status == 500) {
    errorMsg = err.error.errorMsg;
          } else {
    errorMsg = err.error.error;
          }
          this.toastr.error("Error while fetching User Details!")
        });
    }
}
