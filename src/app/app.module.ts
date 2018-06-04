import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Router} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './person/list-person/list-person.component';
import { CreatePersonComponent } from './person/create-person/create-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ListPersonComponent,
    CreatePersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: PersonComponent},
      {path: 'lists', component: ListPersonComponent},
      {path: 'create', component: CreatePersonComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
