import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistloginComponent } from './artistlogin/artistlogin.component';
import { ArtistsignupComponent } from './artistsignup/artistsignup.component';
 
 
import { AuthComponent } from './auth.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OtpComponent } from './otp/otp.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [{
  path:'auth',
  component: AuthComponent,
  children: [
    {path: 'auth', component: ArtistloginComponent},
    {path: 'login', component: ArtistloginComponent},
    {path: 'signup', component: ArtistsignupComponent},
    {path: 'forgotpassword', component: ForgotpasswordComponent},
    {path: 'otp', component: OtpComponent},
    {path: 'tspp', component: TermsAndConditionsComponent},


  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
