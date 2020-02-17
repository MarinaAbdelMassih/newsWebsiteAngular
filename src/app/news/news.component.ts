import { Component, OnInit } from '@angular/core';
import {NewsAPIService} from '../news-api.service'
declare var $:any ;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
 news=[];
 term:string;

  
  constructor(private _NewsAPIService:NewsAPIService) {

    _NewsAPIService.getNews().subscribe(data => {
      this.news = data.articles;
      console.log(this.news)

    });
  

  }
 
  ngOnInit() {


    $("#btnUp").click(function(){
      $("body,html").animate({scrollTop:'0'},1000)
    })
   
  }

}
