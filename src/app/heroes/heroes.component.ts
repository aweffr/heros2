import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero-detail/hero';
import {HeroService} from '../hero.service';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})

export class HeroesComponent implements OnInit {
  title = 'My First Augular App';

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
