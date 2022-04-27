import { RequestsService } from './../../services/requests.service';
import { Component, OnInit } from '@angular/core';
import { api } from 'src/app/services/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  allMovies: any[] = [];
  constructor() { }

  ngOnInit() {
    this.getAllMovies()
  }

  getAllMovies() {
    api.get('/movies').then( res => {
      res.data.forEach(element => {
        this.allMovies.push({
          classification: element.classification,
          description: element.description,
          id: element.id,
          launched_in: element.launched_in,
          title: element.title,
        })
      });
    })
    .catch( err => console.log(err.message))
    .finally(()=> console.log(this.allMovies))
  }
}
