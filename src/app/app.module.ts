import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PresentationModule } from './presentation/presentation.module';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from './core/people.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function servicesOnRun(service: PeopleService) {
  return () => service.retrieveAllPeople();
}

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PresentationModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    PeopleService, 
    {
      provide: APP_INITIALIZER,
      useFactory: servicesOnRun,
      multi: true,
      deps: [PeopleService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
