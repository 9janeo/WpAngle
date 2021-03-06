import { Component } from '@angular/core';
import { AuthenticateService } from './authenticate.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private authService: AuthenticateService) {}
    icon = environment.baseTokenUrl + environment.assetsUrl + 'Iconsocial.png';
    // icon = 'src/assets/Iconsocial.png';
    title = 'wpangle';

    logout() {
        this.authService.logout();
    }
}
