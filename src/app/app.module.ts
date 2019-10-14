import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { DealerComponent } from './dealer/dealer.component';
import { CustomerSignupFormComponent } from './customer-signup-form/customer-signup-form.component';
import { DealerSignupFormComponent } from './dealer-signup-form/dealer-signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AdminComponent,
    DealerComponent,
    CustomerSignupFormComponent,
    DealerSignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
