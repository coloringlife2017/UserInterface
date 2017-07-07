import { ViewInvitationService } from './view-invitation/view-invitation.service';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { UserAuthService } from './commons/services/user-auth.service';
import { UserEventService } from './user-event/user-event.service';
import { UserEvent } from './user-event/dto/UserEvent';
import { CampaignDetailsService } from './campaign-details/campaign-details.service';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { routes } from './../routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';

import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { UserEventComponent } from './user-event/user-event.component';
import { LoginComponent } from './login/login.component';
import { ViewInvitationComponent } from './view-invitation/view-invitation.component';
import { CampDetailComponent } from './new-ui/camp-detail/camp-detail.component';

const firebaseConfig = {
    apiKey: "AIzaSyCJx7rvrkYitHD838_0-DtKoxin30_H2q4",
    authDomain: "coloringlife-fc2a8.firebaseapp.com",
    databaseURL: "https://coloringlife-fc2a8.firebaseio.com",
    projectId: "coloringlife-fc2a8",
    storageBucket: "coloringlife-fc2a8.appspot.com",
    messagingSenderId: "1016268436646"
};

@NgModule({
  declarations: [
    AppComponent,
    CampaignsComponent,
    CampaignDetailsComponent,
    UserEventComponent,
    LoginComponent,
    ViewInvitationComponent,
    CampDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [CampaignDetailsService, UserEvent, 
  ViewInvitationService,
  UserEventService, UserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
