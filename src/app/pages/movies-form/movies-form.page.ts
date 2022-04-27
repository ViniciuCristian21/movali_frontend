import { api } from './../../services/api';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.page.html',
  styleUrls: ['./movies-form.page.scss'],
})
export class MoviesFormPage implements OnInit {
  note: number = 0;
  name: string = '';
  email: string = '';
  id: string = '';
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  onSubmit() {
    console.log({
      note: Number(this.note),
      name: this.name,
      email: this.email,
      movieId: this.id
    })

    api.post("/new-evaluation", {
      note: Number(this.note),
      name: this.name,
      email: this.email,
      id_movie: this.id
    })
    .then( res => console.log(res.data))
    .catch(err => console.log(err.message))
    .finally( ()=> this.router.navigate(['/home/']))
  }

}
