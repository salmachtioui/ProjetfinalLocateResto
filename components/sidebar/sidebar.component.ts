import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/Restaurant', title: 'Restaurant',  icon:'library_books', class: '' },
    { path: '/Ville', title: 'Ville',  icon:'library_books', class: '' },
    { path: '/Zone', title: 'Zone',  icon:'library_books', class: '' },
    { path: '/Specialite', title: 'Specialité',  icon:'library_books', class: '' },
    { path: '/Serie', title: 'Serie',  icon:'library_books', class: '' },
    { path: '/dashboard', title: 'Statistiques',  icon: 'dashboard', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 1000) {
          return false;
      }
      return true;
  };
}
