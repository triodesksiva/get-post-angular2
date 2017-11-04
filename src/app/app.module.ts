import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {studentService  } from './student.service';
import { NameComponent } from './studentpost.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'input',component:NameComponent}
    ])
  ],
  providers: [studentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
