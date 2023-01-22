import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { Films } from '../models/films.model';

/**
 * lorsque nous le declarons il est disponible dans tous l'application
 * @Injectable({
 * provideIn:'root'
 * })
 */

//Il rend le service disponible ici seulement 
@Injectable()
export class ApiService {

    constructor(private client: HttpClient) {

    }
    // creation de la variable du lien http

    endpoint: string = 'https://swapi.dev/api/people/1'
    //Fonction pour consommer l'api
    async apiCall(): Promise<Films> {

        //Resolve est la fonction de succes et reject la fonction de l'echec
        return new Promise((resolve, reject) => {

            this.client.get(this.endpoint).subscribe((data: any) => {
                let result: Films = {

                    title: data.title,
                    episode_id: data.episode_id,
                    opening_crawl: data.opening_crawl,
                    director: data.director,
                    producer: data.producer,
                    release_date: data.release_date

                }
                resolve(result)
            })

        })

    }

}