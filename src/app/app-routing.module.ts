import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AllcitiesComponent } from './allcities/allcities.component';
import { ContactComponent } from './contact/contact.component';
import { AgraComponent } from './cities/agra/agra.component';
import { AmritsarComponent } from './cities/amritsar/amritsar.component';
import { DelhiComponent } from './cities/delhi/delhi.component';
import { GoaComponent } from './cities/goa/goa.component';
import { KeralaComponent } from './cities/kerala/kerala.component';
import { ManaliComponent } from './cities/manali/manali.component';
import { MumbaiComponent } from './cities/mumbai/mumbai.component';
import { ShimlaComponent } from './cities/shimla/shimla.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'cities', component: AllcitiesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'agra', component: AgraComponent},
  {path: 'amritsar', component: AmritsarComponent},
  {path: 'delhi', component: DelhiComponent},
  {path: 'goa', component: GoaComponent},
  {path: 'kerala', component: KeralaComponent},
  {path: 'manali', component: ManaliComponent},
  {path: 'mumbai', component: MumbaiComponent},
  {path: 'shimla', component: ShimlaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
