package com.pranjal.service;

import java.util.List;

import com.pranjal.model.Cart;

public interface CartService {
	public Cart addCart(Cart cart);
	public Cart getCartByUserId(int id);
	public void deleteById(int id);
	public Cart getCartByProductId(int id);
	public List<Cart> getAllCart();
}