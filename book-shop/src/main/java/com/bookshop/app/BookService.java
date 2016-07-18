package com.bookshop.app;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import com.bookshop.app.model.Book;

@Transactional
public interface BookService extends CrudRepository<Book, Integer> {

	List<Book> findByAuthor (String authorName);
}
