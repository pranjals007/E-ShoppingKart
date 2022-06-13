package com.pranjal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pranjal.model.Cart;

public interface CartRepository extends MongoRepository<Cart, Integer>{
	public Cart getCartByUserId(int cartId);
}
