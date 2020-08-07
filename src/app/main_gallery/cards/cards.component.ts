import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private http: HttpClient,private router:Router) { }

  @Output() sel_movie:EventEmitter<any>=new EventEmitter<any>();
  cards_array = [];
  movie_list=[
    {name:'batman'},
    {name:'frozen'},
    {name:'jumanji the next level'},
    {name:'Battle Star Wars'},
    {name:'Avengers EndGame'},
    {name:'Iron Man'},
    {name:"charlie's Angels"},
    {name:'Captain America civil war'} , 
    {name:'Hulk'},  
    {name:'ford v ferrari'}, 
    {name:'cars'}, 
  ]
  ngOnInit(): void {
    for (let i = 0; i < this.movie_list.length; i++) {
      const name=this.movie_list[i].name;
      this.http.get('http://www.omdbapi.com/?t='+name+'&apikey=63937df0').subscribe((data) => {
        // console.log(data);
        let title: any='';
        if(data['Title'].length>21){
          title=data['Title']+'';
          title=title.substring(0,21)+'...';
        }else{
          title=data['Title']
        } 
        this.cards_array.push({id:data['imdbID'],name:title,tooltip:data['Title'],year:data['Year'],poster:data['Poster']})
      });
    }
  }


  onCardSelect(name) {
    this.sel_movie.emit(name);
    this.router.navigateByUrl('/desc');
  }
}
