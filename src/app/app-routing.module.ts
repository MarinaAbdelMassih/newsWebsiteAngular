import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component'
import { NewsComponent } from './news/news.component';
import {NewsDetailsComponent} from './news-details/news-details.component'



const routes: Routes = [

  {path:'' , component:NewsComponent},
  {path:'home' , component:NewsComponent},
  {path:'contacts' , component:ContactsComponent},
  {path:'newsDetails/:id' , component:NewsDetailsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
