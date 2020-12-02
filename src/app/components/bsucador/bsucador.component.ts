import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-bsucador',
  templateUrl: './bsucador.component.html',
  styles: [
  ]
})
export class BsucadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroeService.buscarHeroe( params['termino']);
      console.log(this.heroes);
    });
  }

}
