import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FarmService } from './FarmService';
import { AppComponent } from './app.component';
import { FarmListComponentComponent } from './FarmComponent/farm-list-component/farm-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmListComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Add HttpClientModule here
  ],
  providers: [FarmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
