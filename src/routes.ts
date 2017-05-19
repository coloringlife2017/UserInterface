import { CampaignsComponent } from './app/campaigns/campaigns.component';
import { CausesComponent } from './app/causes/causes.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: CausesComponent },
    { path: 'campaigns', component: CampaignsComponent }
];