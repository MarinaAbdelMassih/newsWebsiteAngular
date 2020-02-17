import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsAPIService} from '../news-api.service';
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  ind;
  newsdetail:any={};
  constructor(public _ActivatedRoute:ActivatedRoute , public _NewsAPIService:NewsAPIService ) { 
    this.ind =_ActivatedRoute.snapshot.paramMap.get("id");

  }

  ngOnInit() {

    this._NewsAPIService.getNews().subscribe((d)=>{this.newsdetail= d.articles[this.ind]});
    

  }

}
