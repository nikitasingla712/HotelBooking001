import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { ManaliComponent } from './cities/manali/manali.component';
import { DelhiComponent } from './cities/delhi/delhi.component';
import { GoaComponent } from './cities/goa/goa.component';
import { ShimlaComponent } from './cities/shimla/shimla.component';
import { AmritsarComponent } from './cities/amritsar/amritsar.component';
import { MumbaiComponent } from './cities/mumbai/mumbai.component';
import { AgraComponent } from './cities/agra/agra.component';
import { KeralaComponent } from './cities/kerala/kerala.component';
import { AllcitiesComponent } from './allcities/allcities.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { UserRegistrationService } from './user-registration.service';
import { PaymentComponent } from './payment/payment.component';
import { AuthenticateService } from './authenticate.service';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    ManaliComponent,
    DelhiComponent,
    GoaComponent,
    ShimlaComponent,
    AmritsarComponent,
    MumbaiComponent,
    AgraComponent,
    KeralaComponent,
    AllcitiesComponent,
    HeaderComponent,
    PaymentComponent
  ],
  imports: [
    HttpClientModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    
  ],
  providers: [UserRegistrationService,
  AuthenticateService,
AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
