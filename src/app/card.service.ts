import { Input, Injectable } from '@angular/core';
@Injectable()
export class CardService {
    sel_movie: any;

    getName(){
        return this.sel_movie;
    }
}