import { Component } from '@angular/core';
import { Router } from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigateByUrl('/home');
  }
  fastFoodTable() {
    this.router.navigateByUrl('/table');
  }
  fastFoodCard() {
    this.router.navigateByUrl('/card');
  }

}
