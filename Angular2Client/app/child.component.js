"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var books_service_1 = require('./books.service');
var booklist_component_1 = require('./booklist.component');
var addbooks_component_1 = require('./addbooks.component');
var BooksComponent = (function () {
    function BooksComponent(bookService) {
        this.category = "Science";
        this.list = "";
        this.bookService = bookService;
        this.books = bookService.getBooks();
    }
    ;
    BooksComponent.prototype.onNotify = function (book) {
        this.addbooks.edit(book);
    };
    BooksComponent.prototype.loadBooks = function (event) {
        console.log(event);
        this.books = this.bookService.getBooks();
        this.list = "";
        for (var i in this.books) {
            this.list += ("<li>" + this.books[i] + "</li>");
        }
        console.log(this.books);
    };
    __decorate([
        core_1.ViewChild(addbooks_component_1.AddBooksComponent), 
        __metadata('design:type', addbooks_component_1.AddBooksComponent)
    ], BooksComponent.prototype, "addbooks", void 0);
    BooksComponent = __decorate([
        core_1.Component({
            selector: 'books',
            template: "\t{{category}}\n\t\t<ul>\n\t\t\t<booklist [books]='books' (notify)=\"onNotify($event)\"></booklist>\n\t\t\t\n\t\t</ul>\n\t\t<button (click)=\"loadBooks()\">list books</button>\n\t\t<addbooks [selectedBook]=selectedBook ></addbooks>\n\t\t",
            providers: [books_service_1.BookService],
            directives: [booklist_component_1.BookListComponent, addbooks_component_1.AddBooksComponent]
        }), 
        __metadata('design:paramtypes', [books_service_1.BookService])
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=child.component.js.map