import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarItem } from './models/navbar-model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  navbarItems: NavbarItem[] = [
    {
      label: 'Home',
      routeTo: '/'
    },
    {
      label: 'Donate',
      routeTo: '/donate-food'
    },
    {
      label: 'Receive',
      routeTo: '/receive-food'
    },
    {
      label: 'About',
      routeTo: '/about'
    },
    {
      label: 'Contact Us',
      routeTo: '/contact-us'
    }];
}
