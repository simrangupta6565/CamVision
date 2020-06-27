import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],


})
export class NavbarComponent implements OnInit {

   

  constructor(public dialog: MatDialog) {}
 
  
  change: string;
  

  openDialog(ram: string): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open( SignUpComponent ,{data : {index :ram}});
   
    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed!');
      console.log(result);
    })
  }
 
  
  
  ngOnInit(): void {
    
  }

}
