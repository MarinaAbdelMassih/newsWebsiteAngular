import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(news: any[], term: string): any {
    if(term == undefined)
    {
      return news;
    }
    return news.filter(function(news){
      return news.title.includes(term.toUpperCase());
    });
  }

}
