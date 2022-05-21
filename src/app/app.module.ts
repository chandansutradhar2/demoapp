import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
=======
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
>>>>>>> 85b741f88db11b1b08ff029444780b90712b3678

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    DashboardComponent,
    AdminDashboardComponent
=======
    LoginComponent,
    SignupComponent
>>>>>>> 85b741f88db11b1b08ff029444780b90712b3678
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
