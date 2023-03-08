import { DailogboxComponent } from './../dailogbox/dailogbox.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
 

 
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-artist-newrelease',
  templateUrl: './artist-newrelease.component.html',
  styleUrls: ['./artist-newrelease.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
 
export class ArtistNewreleaseComponent {
   
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder ,public dialog: MatDialog) {}

  foods: Food[] = [
    {value: 'Artist 1', viewValue: 'Artist 1'},
    {value: 'Artist 2', viewValue: 'Artist 2'},
    {value: 'Artist 3', viewValue: 'Artist 3'},
  ];


  disableSelect = new FormControl(false);
  btnVal:boolean = true;
  
  checked = false; 
   checkall(){
    this.checked =!this.checked;
    this.btnVal =!this.btnVal;
    
   }

   url: any; //Angular 11, for stricter type
	msg = "";
	
	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
	}

  openDialog() {
    this.dialog.open(DailogboxComponent);
  }
 
 
}
