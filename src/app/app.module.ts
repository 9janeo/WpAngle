import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { PostModule } from './post/post.module';
import { ProjectsModule } from './projects/projects.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageModule } from './page/page.module';
import { MatSidenavModule} from '@angular/material/Sidenav';
import { MatIconModule } from '@angular/material/Icon';
import { MatButtonModule } from '@angular/material/Button';
import { MatListModule } from '@angular/material/List';
import {SharedModule} from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { SideNavComponent } from './content/side-nav/side-nav.component';


import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [AppComponent, WelcomeComponent, LoginComponent],
    imports: [
      CommonModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      PostModule,
      ProjectsModule,
      PageModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      MatSidenavModule,
      MatIconModule,
      MatButtonModule,
      MatListModule,
      SharedModule,
      NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
