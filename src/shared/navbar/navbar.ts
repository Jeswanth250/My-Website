import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
isMobileMenuOpen = false;

toggleMobileMenu() {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
}

scrollTo(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  this.isMobileMenuOpen = false;
}
}
