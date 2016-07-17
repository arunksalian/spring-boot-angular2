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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('./rxjs-operators');
var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.loadBooks();
    }
    ;
    BookService.prototype.getBooks = function () {
        return BookService.books;
    };
    ;
    BookService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("res:" + body);
        BookService.books = body;
        return body || {};
    };
    ;
    BookService.prototype.handleError = function (error) {
        console.log(error);
    };
    ;
    BookService.prototype.loadBooks = function () {
        this.http.get("http://localhost:8080/all").map(this.extractData).subscribe(function (data) {
            BookService.books = data;
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    ;
    BookService.prototype.saveBook = function (book) {
        var _this = this;
        var body = book;
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        this.http.post("http://localhost:8080/save", body, options).map(this.extractData).subscribe(function (data) {
            BookService.books = data;
            console.log("saved data:" + data);
        }, function (err) { return _this.handleError(err); }, function () { return console.log('saved'); });
    };
    BookService.books = [];
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=books.service.js.map