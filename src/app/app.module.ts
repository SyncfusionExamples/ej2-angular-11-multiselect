import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MultiSelectAllModule, FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
