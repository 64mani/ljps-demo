import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdmissionComponent } from './admission/admission.component';
import { HouseComponent } from './house/house.component';
import { DirectorComponent } from './director/director.component';
import { PrincipalComponent } from './principal/principal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NoticeComponent } from './notice/notice.component';
import { HomeworkComponent } from './homework/homework.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WingComponent } from './wing/wing.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
  { pathMatch: 'full', path: 'homePage', component: HomePageComponent },
  { pathMatch: 'full', path: 'admission', component: AdmissionComponent },
  { pathMatch: 'full', path: 'house', component: HouseComponent },
  { pathMatch: 'full', path: 'director', component: DirectorComponent },
  { pathMatch: 'full', path: 'principal', component: PrincipalComponent },
  { pathMatch: 'full', path: 'aboutUs', component: AboutUsComponent },
  { pathMatch: 'full', path: 'notice', component: NoticeComponent },
  { pathMatch: 'full', path: 'homework', component: HomeworkComponent },
  { pathMatch: 'full', path: 'gallery', component: GalleryComponent },
  { pathMatch: 'full', path: 'wing', component: WingComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdmissionComponent,
    HouseComponent,
    DirectorComponent,
    PrincipalComponent,
    AboutUsComponent,
    NoticeComponent,
    HomeworkComponent,
    GalleryComponent,
    WingComponent
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
