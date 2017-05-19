import { CampaignsComponent } from './campaigns/campaigns.component';
import { CausesComponent } from './causes/causes.component';
import { routes } from './../routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CausesComponent,
    CampaignsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
