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
var Book_1 = require('./Book');
var books_service_1 = require('./books.service');
var AddBooksComponent = (function () {
    function AddBooksComponent(bookService) {
        this.book = new Book_1.Book("", "");
        this.bookService = bookService;
    }
    ;
    AddBooksComponent.prototype.saveBook = function () {
        console.log(this.book.title);
        if (this.book.title != "") {
            this.bookService.saveBook(this.book);
            this.book = new Book_1.Book("", "");
        }
    };
    ;
    AddBooksComponent.prototype.edit = function (book) {
        this.book = book;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Book_1.Book)
    ], AddBooksComponent.prototype, "selectedBook", void 0);
    AddBooksComponent = __decorate([
        core_1.Component({
            selector: 'addbooks',
            template: "\t<form>\n\t\t<input type=\"hidden\" name=\"bookId\" [(ngModel)]=\"book.bookId\">\n\t\t<input type=\"text\" name=\"title\" [(ngModel)]=\"book.title\">\n\t\t<input type=\"text\" name=\"author\"  [(ngModel)]=\"book.author\">\n\t\t<Button (click)=\"saveBook()\">Save</Button>\n\t\t</form>\n\t\t",
            providers: [books_service_1.BookService],
        }), 
        __metadata('design:paramtypes', [books_service_1.BookService])
    ], AddBooksComponent);
    return AddBooksComponent;
}());
exports.AddBooksComponent = AddBooksComponent;
//# sourceMappingURL=addbooks.component.js.map