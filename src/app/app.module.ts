import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './add-user/add-user.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddTokenComponent } from './add-token/add-token.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
