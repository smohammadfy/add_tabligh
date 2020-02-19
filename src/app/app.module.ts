import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './add-user/add-user.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatSidenavModule,
  MatTableModule, MatToolbarModule,
  MatCommonModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddTokenComponent } from './add-token/add-token.component';
import { LoadingComponent } from './loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { LoadingInterceptor } from './loading.interceptor';
import { LoadingService } from './loading.service';
import {DialogComponent} from './dialog';
import { FailedDiagramComponent } from './failed-diagram/failed-diagram.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgxMapboxGLModule } from 'mapir-angular-component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddTokenComponent,
    LoadingComponent,
    DialogComponent,
    FailedDiagramComponent

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
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    OverlayModule,
    MatDialogModule,
    MatCommonModule,
    MDBBootstrapModule,
    MatChipsModule,
    MatAutocompleteModule,
    NgxMapboxGLModule,
  ],
  entryComponents: [ LoadingComponent, DialogComponent ],
  providers: [
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
