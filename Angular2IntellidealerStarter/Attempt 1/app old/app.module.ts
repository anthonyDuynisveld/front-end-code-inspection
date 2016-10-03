import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { routing,
  appRoutingProviders }  from './app.routing';
import { HeroesModule }         from './heroes/heroes.module';
import { CrisisListComponent }  from './crisis-center/crisis-list.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HeroesModule
  ],
  declarations: [
    AppComponent,
    CrisisListComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
