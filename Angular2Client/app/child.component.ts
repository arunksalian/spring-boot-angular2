import { Component, ViewChild } from '@angular/core';
import { BookService } from './books.service';
import { Book }    from './Book';
import { BookListComponent } from './booklist.component';
import { AddBooksComponent } from './addbooks.component';

@Component({
  selector: 'books',
  template: `	{{category}}
		<ul>
			<booklist [books]='books' (notify)="onNotify($event)"></booklist>
			
		</ul>
		<button (click)="loadBooks()">list books</button>
		<addbooks [selectedBook]=selectedBook ></addbooks>
		`,

  providers : [BookService],
  directives : [BookListComponent, AddBooksComponent]
})
export class BooksComponent { 
	category = "Science";
	books;
	selectedBook;
	bookService;
	list="";
	@ViewChild(AddBooksComponent) addbooks: AddBooksComponent;
	constructor (bookService : BookService) {
		this.bookService = bookService;
		this.books = bookService.getBooks();
	};
	onNotify(book:Book):void {		
		this.addbooks.edit(book);

	  }
	loadBooks (event) {
		console.log(event);
		this.books = this.bookService.getBooks();
		this.list = "";
		for (var i in this.books) {
			this.list += ("<li>"+this.books[i]+"</li>");
		}
		console.log(this.books);
	}
}
