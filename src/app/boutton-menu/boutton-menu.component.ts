import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutton-menu',
  templateUrl: './boutton-menu.component.html',
  styleUrls: ['./boutton-menu.component.scss']
})
export class BouttonMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openMenu() {
  	this.router.navigate(['/menu']);
  }

}
