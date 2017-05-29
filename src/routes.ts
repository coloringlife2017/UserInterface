import { ViewInvitationComponent } from './app/view-invitation/view-invitation.component';
import { LoginComponent } from './app/login/login.component';
import { UserAuthService } from './app/commons/services/user-auth.service';
import { UserEventComponent } from './app/user-event/user-event.component';
import { CampaignDetailsComponent } from './app/campaign-details/campaign-details.component';
import { CampaignsComponent } from './app/campaigns/campaigns.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: CampaignsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'campaigns', component: CampaignsComponent },
    { path: 'campDetail/:campId', component: CampaignDetailsComponent },
    { path: 'userEvent/new', component: UserEventComponent/*, canActivate:[UserAuthService] */ },
    { path: 'userEvent/:eventId', component: ViewInvitationComponent /*, canActivate:[UserAuthService] */ }
];