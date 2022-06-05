import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProteinsComponent } from './proteins/proteins.component';
import { ProteinsService } from './proteins/proteins.service';

@NgModule({
  declarations: [
    AppComponent,
    ProteinsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ProteinsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
