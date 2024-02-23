import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
})
export class ScrollTopComponent {
  scrollHeight = 300;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const button = document.querySelector('.scroll-top-button') as HTMLElement;

    if (window.scrollY >= this.scrollHeight) {
      button.classList.remove('hidden');
    } else {
      button.classList.add('hidden');
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
