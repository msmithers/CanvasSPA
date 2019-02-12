import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CanvasaccountComponent } from './canvasaccount/canvasaccount.component';
import { CourseComponent } from './course/course.component';


@NgModule({
   declarations: [
      AppComponent,
      CanvasaccountComponent,
      CourseComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
