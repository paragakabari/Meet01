import { SuccessMessageComponent } from './artist/success-message/success-message.component';
import { ECreatePaymentSlipComponent } from './artist/e-create-payment-slip/e-create-payment-slip.component';
import { ArtistNewreleaseComponent } from './artist/artist-newrelease/artist-newrelease.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDashboardComponent } from './artist/artist-dashboard/artist-dashboard.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistPlanComponent } from './artist/artist-plan/artist-plan.component';

const routes: Routes = [
  {path: '', component:ArtistComponent},
  {path: 'dashboard', component:ArtistDashboardComponent},
  {path: 'new-release', component:ArtistNewreleaseComponent},
  {path: 'payment-slip', component:ECreatePaymentSlipComponent},
  {path: 'success-message', component:SuccessMessageComponent},
  {path: 'plan', component:ArtistPlanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
