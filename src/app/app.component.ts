import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'signing-app';
  navLinks = [
    { label: 'Home', link: './home', index: 0 },
    { label: 'Create Singing Request', link: './create', index: 1 }
  ];
  activeLinkIndex = -1;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === `.${this.router.url}`));
    });
  }

}
