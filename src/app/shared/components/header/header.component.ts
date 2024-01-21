import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
// @ts-ignore
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('underline', [
      state('void', style({ width: '0' })),
      state('visible', style({ width: '100%' })),
      transition('void <=> visible', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class HeaderComponent {

  underlineState: string = 'void';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigateByUrl('/home');

  }
  aboutUs() {
    this.router.navigateByUrl('/table');

  }
  services() {
    this.router.navigateByUrl('/card');

  }
  contact() {
    this.router.navigateByUrl('/card');

  }
  projects() {
    this.router.navigateByUrl('/card');
  }
}
