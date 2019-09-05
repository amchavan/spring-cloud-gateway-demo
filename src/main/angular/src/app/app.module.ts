import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { PageHeaderComponent } from './page-header/page-header.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from "@angular/forms";
import { BookService } from "./book.service";
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NgbActiveModal, BookService, HttpClient ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
