import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    mobile_menu_visible: any = 0;
    private sidebarVisible: boolean;

    constructor(location: Location, private element: ElementRef, private renderer: Renderer2, private router: Router) {
        this.location = location;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.sidebarClose();
            }
        });
    }

    sidebarOpen() {
        const toggleButton = this.getToggleButton();
        const body = document.getElementsByTagName('body')[0];
        setTimeout(() => {
            this.renderer.addClass(toggleButton, 'toggled');
        }, 500);

        this.renderer.addClass(body, 'nav-open');

        this.sidebarVisible = true;
    }

    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        const toggleButton = this.getToggleButton();

        if (toggleButton) {
            this.renderer.removeClass(toggleButton, 'toggled');
        }

        this.sidebarVisible = false;
        this.renderer.removeClass(body, 'nav-open');
    }

    sidebarToggle() {
        const toggleButton = this.getToggleButton();
        const body = document.getElementsByTagName('body')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }

        const mobileMenuVisible = this.mobile_menu_visible;

        if (mobileMenuVisible === 1) {
            body.classList.remove('nav-open');
            this.mobile_menu_visible = 0;

            const $layer: any = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }

            setTimeout(() => {
                if (toggleButton) {
                    this.renderer.removeClass(toggleButton, 'toggled');
                }
            }, 400);
        } else {
            setTimeout(() => {
                if (toggleButton) {
                    this.renderer.addClass(toggleButton, 'toggled');
                }
            }, 430);

            const $layer = this.renderer.createElement('div');
            this.renderer.setAttribute($layer, 'class', 'close-layer');

            let parentElement: any;

            if (body.querySelectorAll('.main-panel')) {
                parentElement = document.getElementsByClassName('main-panel')[0];
            } else if (body.classList.contains('off-canvas-sidebar')) {
                parentElement = document.getElementsByClassName('wrapper-full-page')[0];
            }

            if (parentElement) {
                this.renderer.appendChild(parentElement, $layer);
            }

            setTimeout(() => {
                this.renderer.addClass($layer, 'visible');
            }, 100);

            this.renderer.listen($layer, 'click', () => {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                this.renderer.removeClass($layer, 'visible');

                setTimeout(() => {
                    this.renderer.removeChild(parentElement, $layer);
                    if (toggleButton) {
                        this.renderer.removeClass(toggleButton, 'toggled');
                    }
                }, 400);
            });

            this.renderer.addClass(body, 'nav-open');
            this.mobile_menu_visible = 1;
        }
    }

    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }

        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }

    private getToggleButton(): any {
        const navbar: HTMLElement = this.element.nativeElement;
        return navbar.getElementsByClassName('navbar-toggler')[0];
    }
}
