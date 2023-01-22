import { Component, OnInit } from '@angular/core';

import { ApiService } from '../service/api.service';

import { Films } from '../models/films.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  //Dans le constructeur  ,le variable api sont declaré pour recevoir le service 
  constructor(private api: ApiService) { }

  //declaration de propriete 
  films !: Films
  //chargement a false ou affichage 
  loading: boolean = false



  //Il charge les donnees au niveau de la page
  ngOnInit(): void {

    //then (quand) les donnees seront disponible
    this.api.apiCall().then((data) => {
      this.films = data
      this.loading = true
      //Ici lorsque nous appelle la fonction nous voyons le resultat en temps reel
      //console.log(data)
    })
  }

}
