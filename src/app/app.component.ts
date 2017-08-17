import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  ngOnInit(): void {
  }
}
