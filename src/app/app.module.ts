import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import {ReactiveFormsModule ,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SeeMorePipe } from './see-more.pipe';
import { SearchPipe } from './search.pipe';
import { CommentsComponent } from './comments/comments.component';



@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsDetailsComponent,
    NavbarComponent,
    FooterComponent,
    ContactsComponent,
    SeeMorePipe,
    SearchPipe,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
