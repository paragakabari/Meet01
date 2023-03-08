import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ArtistloginComponent } from './artistlogin/artistlogin.component';
import { ArtistsignupComponent } from './artistsignup/artistsignup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RouterModule } from '@angular/router';
import { OtpComponent } from './otp/otp.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthComponent,
    ArtistloginComponent,
    ArtistsignupComponent,
    ForgotpasswordComponent,
    OtpComponent,
    TermsAndConditionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
