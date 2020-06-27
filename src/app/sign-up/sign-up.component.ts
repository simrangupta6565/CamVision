import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators, } from '@angular/forms';
import {MAT_DIALOG_DATA, } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { strict } from 'assert';


export interface DialogData{
  index: '0'|'1';
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;

  getErrorMessage2(){
    if(this.pass.hasError('required')){
      return 'You must enter a value';
    }
    if(this.pass.hasError('pattern'))
    return 'Minimum 8-16 character 1 uppercase, 1 lowercase, 1 numeric, 1 special character' ;
    return '';
  }

  constructor( @Inject(MAT_DIALOG_DATA) public data:DialogData, private _snackBar: MatSnackBar) {}
  SignUpEmail: string;
  LogInEmail : string;
    
 digit =this.data.index;

openSnackBar( Id : string, password : string) {
  if(!(this.email.hasError('email')) && !(this.pass.hasError('pattern')) && (Id.length !=0) && (password.length !=0) )
  {
      if(Id == 'John@gmail.com')
  {
    this._snackBar.open('Account already exists', 'Enter Password', 
    {
      duration: 10000,
      
       panelClass: ['mat-toolbar', 'mat-warn']
    });
    this.digit='1';
    this.LogInEmail= Id;

  }
  else
{  this._snackBar.open('You Signed In', '', 
  {
    duration: 4000,
     panelClass: ['mat-toolbar', 'mat-primary']
  });
}
  }
  else
  {
    this._snackBar.open('Please enter all credentials correctly', '', 
    {
      duration: 4000,
       panelClass: ['mat-toolbar', 'mat-warn']
    });
  }
}


openSnackBar2( Id : string, password : string) {
  if(!(this.email.hasError('email')) && (Id.length !=0) && (password.length !=0))
  {
  if(Id == 'John@gmail.com')
{
  if(password =='John@123')
  {
    this._snackBar.open('You Logged In', '', 
    {
      duration: 4000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
    this.digit='1';
    this.LogInEmail= Id;
  }
  else
  {
    this._snackBar.open('Incorrect Password', 'Enter Again', 
    {
      duration: 10000,
      panelClass: ['mat-toolbar', 'mat-warn']
    });
    this.digit='1';
    this.LogInEmail= Id;
  }
}
else
{  
  this._snackBar.open('Account Not Found', 'Please Sign Up', 
{
  duration: 10000,
  panelClass: ['mat-toolbar', 'mat-warn']
});
this.digit='0';
    this.SignUpEmail= Id;
}
}
else
{
  this._snackBar.open('Please enter all credentials correctly', '', 
  {
    duration: 4000,
     panelClass: ['mat-toolbar', 'mat-warn']
  });
}

}


  ngOnInit(): void {
    // console.log(this.data.index);
  }

}
