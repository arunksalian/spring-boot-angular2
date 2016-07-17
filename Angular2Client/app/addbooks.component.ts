import { Input, Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Book }    from './Book';
import { BookService } from './books.service';
@Component({
  selector: 'addbooks',
  template: `	<form>
		<input type="hidden" name="bookId" [(ngModel)]="book.bookId">
		<input type="text" name="title" [(ngModel)]="book.title">
		<input type="text" name="author"  [(ngModel)]="book.author">
		<Button (click)="saveBook()">Save</Button>
		</form>
		`,
providers : [BookService],
})
export class AddBooksComponent {
	bookService;
	book:Book = new Book("", "") ;
	@Input() selectedBook : Book;
	constructor (bookService : BookService) {
		this.bookService = bookService;
	};
	saveBook () {
		console.log(this.book.title);
		if (this.book.title != "") {	
			this.bookService.saveBook (this.book);
			this.book = new Book("", "") ;
		}
	};
	edit (book:Book) {
		this.book = book;
	}

} 


