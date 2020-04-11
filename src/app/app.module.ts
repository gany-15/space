import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule, RouteComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AllApiService } from './all-api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RouteComponents,
    PageNotFoundComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [AllApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
