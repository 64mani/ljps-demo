import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdmissionComponent } from './admission/admission.component';
import { HouseComponent } from './house/house.component';
import { DirectorComponent } from './director/director.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
  { pathMatch: 'full', path: 'homePage', component: HomePageComponent },
  { pathMatch: 'full', path: 'admission', component: AdmissionComponent },
  { pathMatch: 'full', path: 'house', component: HouseComponent},
  { pathMatch: 'full', path: 'director', component: DirectorComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdmissionComponent,
    HouseComponent,
    DirectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
