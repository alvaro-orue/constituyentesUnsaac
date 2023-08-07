import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {AuthGuard} from "@angular/fire/auth-guard";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthRoutingModule} from "./auth/auth-routing.module";
import {UserComponent} from "./components/user/user.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {TeacherDashboardComponent} from "./components/teacher-dashboard/teacher-dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'sign-in', component: LoginComponent },
  // { path: 'register-user', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  // { path: 'student-dashboard', component: StudentDashboardComponent},
  { path: 'teacher-dashboard', component: TeacherDashboardComponent},
  { path: 'user', component: UserComponent },

  // { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: 'verify-email-address', component: VerifyEmailComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
