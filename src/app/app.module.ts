import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProteinsComponent } from './proteins/proteins.component';
import { ProteinsService } from './proteins/proteins.service';
import { ProteinsPipePipe } from './ProteinsPipe/proteins-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProteinsComponent,
    ProteinsPipePipe,
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
