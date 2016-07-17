import { Input,Output, EventEmitter, Component } from '@angular/core';
import { Book }    from './Book';
@Component({
  selector: 'booklist',
  template: `	<li *ngFor="let book of books">{{book.bookId}}, <a href="javascript:;" (click)="editBook (book)">{{book.title}}</a> </li>	
		`,

})
export class BookListComponent {
	@Input() books:String[];
	@Output() notify: EventEmitter<Book> = new EventEmitter<Book>();
	editBook (book:Book) {

		this.notify.emit(book);
	}
} 
