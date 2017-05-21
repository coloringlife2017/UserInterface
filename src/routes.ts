import { UserEventComponent } from './app/user-event/user-event.component';
import { CampaignDetailsComponent } from './app/campaign-details/campaign-details.component';
import { CampaignsComponent } from './app/campaigns/campaigns.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', component: CampaignsComponent},
    { path: 'campaigns', component: CampaignsComponent },
    { path: 'campDetail/:campId', component: CampaignDetailsComponent},
    { path: 'userEvent/new', component:UserEventComponent}
];