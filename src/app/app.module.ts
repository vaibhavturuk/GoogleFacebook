import { NgModule }      from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Angular2SocialLoginModule } from "angular2-social-login";

let providers = {
    "google": {
    "clientId": "346502243474-sa0bq8q5bu31hge781f29ratb14bcbis"
  },
  
    "facebook": {
      "clientId": "357644274649684",
      "apiVersion": "v2.4"
    }
  };

@NgModule({
  imports: [ 
              BrowserModule,
              Angular2SocialLoginModule
          ],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  constructor(){}
}

Angular2SocialLoginModule.loadProvidersScripts(providers);
