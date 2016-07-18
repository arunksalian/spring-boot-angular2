package com.bookshop.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bookshop.app.BookService;
import com.bookshop.app.model.Book;

@RestController
public class BookController {

	
	public Iterable<Book> list() {
		return bookService.findAll();
	}

	@CrossOrigin
	@RequestMapping("/all")
	public Iterable<Book> listByAuthor() {
		return bookService.findAll();
	}
	
	@CrossOrigin
	@RequestMapping(path="/save", method=RequestMethod.POST, produces="application/json")
	
	public Iterable<Book> save(@RequestBody Book book) {
		bookService.save(book);
		return bookService.findAll();
	}
	@Autowired
	private BookService  bookService;
}
