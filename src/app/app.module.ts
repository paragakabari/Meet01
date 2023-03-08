import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ArtistComponent } from './artist/artist.component';
import { ArtistDashboardComponent } from './artist/artist-dashboard/artist-dashboard.component';
import { ArtistNewreleaseComponent } from './artist/artist-newrelease/artist-newrelease.component';
import { ArtistCatalogueComponent } from './artist/artist-catalogue/artist-catalogue.component';
import { ArtistLatestreleaseComponent } from './artist/artist-latestrelease/artist-latestrelease.component';
import { ArtistRoyaltiesearningsComponent } from './artist/artist-royaltiesearnings/artist-royaltiesearnings.component';
import { ArtistSalestrendsComponent } from './artist/artist-salestrends/artist-salestrends.component';
import { ArtistPlanComponent } from './artist/artist-plan/artist-plan.component';

import { RouterModule } from '@angular/router';
import { ArtistHeaderComponent } from './artist/artist-header/artist-header.component';
import { ArtistFooterComponent } from './artist/artist-footer/artist-footer.component';
import { ArtistSidebarComponent } from './artist/artist-sidebar/artist-sidebar.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { DailogboxComponent } from './artist/dailogbox/dailogbox.component';
import { ECreatePaymentSlipComponent } from './artist/e-create-payment-slip/e-create-payment-slip.component';
import { SuccessMessageComponent } from './artist/success-message/success-message.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistDashboardComponent,
    ArtistNewreleaseComponent,
    ArtistCatalogueComponent,
    ArtistLatestreleaseComponent,
    ArtistRoyaltiesearningsComponent,
    ArtistSalestrendsComponent,
    ArtistPlanComponent,
    ArtistHeaderComponent,
    ArtistFooterComponent,
    ArtistSidebarComponent,
    DailogboxComponent,
    ECreatePaymentSlipComponent,
    SuccessMessageComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    AuthRoutingModule,
    RouterModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDialogModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
