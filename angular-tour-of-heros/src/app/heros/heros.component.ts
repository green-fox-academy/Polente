import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }
  constructor() { }

  ngOnInit() {
  }

}
