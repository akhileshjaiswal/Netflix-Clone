import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService } from '../card.service';

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.css']
})
export class DescriptionSectionComponent implements OnInit {

  constructor(private cardser: CardService, private http: HttpClient) { }
  name;
  poster;
  runtime;
  data:any;

  ngOnInit(): void {
    this.name = this.cardser.getName();
    this.getdetails(this.name);
  }

  getdetails(name) {
    console.log(name);
    this.http.get('http://www.omdbapi.com/?i=' + name + '&apikey=63937df0').subscribe((data) => {
      console.log(data);
      this.poster = data['Poster'];
      this.runtime=this.getTime(data['Runtime']);
      this.data=data;
    });
  }

  getTime(time){
    const arr=time.split(" ");
    let real_time_hour=parseInt(arr[0])/60;
    let real_time_h:string=real_time_hour+'';
    real_time_h =real_time_h.substring(0,1);
    const real_time_min=parseInt(arr[0])%60;
    return(+real_time_h +' hours '+real_time_min+" minutes");
  }

}
