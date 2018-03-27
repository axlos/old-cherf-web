import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    currentRoute: string;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.router.events.subscribe(state => {
            if (state instanceof NavigationEnd) {
                this.currentRoute = state.url;
            }
        });
    }

}
