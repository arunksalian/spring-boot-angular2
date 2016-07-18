package com.bookshop.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class ShopDoor {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(ShopDoor.class, args);
	}

}
