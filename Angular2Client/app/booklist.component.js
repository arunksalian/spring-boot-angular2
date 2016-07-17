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
var BookListComponent = (function () {
    function BookListComponent() {
        this.notify = new core_1.EventEmitter();
    }
    BookListComponent.prototype.editBook = function (book) {
        this.notify.emit(book);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], BookListComponent.prototype, "books", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BookListComponent.prototype, "notify", void 0);
    BookListComponent = __decorate([
        core_1.Component({
            selector: 'booklist',
            template: "\t<li *ngFor=\"let book of books\">{{book.bookId}}, <a href=\"javascript:;\" (click)=\"editBook (book)\">{{book.title}}</a> </li>\t\n\t\t",
        }), 
        __metadata('design:paramtypes', [])
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=booklist.component.js.map