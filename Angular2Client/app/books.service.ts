import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import './rxjs-operators';
import { Book }    from './Book';

@Injectable()
export class BookService { 
	http ;
	static books = [];
	constructor(http:Http) {		
		this.http = http;
		this.loadBooks ();
	};
	getBooks(): String[] {
		return BookService.books;
	};
	private extractData(res) {

	  let body = res.json();
	  console.log("res:"+body);
	  BookService.books = body;
	  return body || { };
	};
	private handleError (error) {
		console.log(error);
	};
	private loadBooks() {
		this.http.get("http://localhost:8080/all").map(this.extractData).subscribe(
		data => { 
			BookService.books = data;
			},
		err => console.error(err),
		() => console.log('done')
	     
			);
		
	};

	saveBook (book:Book) {
		let body = book;
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		this.http.post("http://localhost:8080/save", body, options) .map(this.extractData).subscribe(
      data => { 

	BookService.books = data;
	console.log("saved data:"+data);
	},
      err => this.handleError(err),
      () => console.log('saved')
    );
	}
}
