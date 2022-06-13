package com.pranjal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.pranjal.model.Cart;
import com.pranjal.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController  {

	@Autowired
	private CartService cartService;
	
	@Autowired
	private RestTemplate restTemplate;

	@PostMapping("/add")
	public ResponseEntity<String> addCartById(@RequestBody Cart cart) {
		cartService.addCart(cart);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping("/get")
	public ResponseEntity<?> getAllCart(){
		return ResponseEntity.ok(this.cartService.getAllCart());
	}

	@GetMapping("/get/user/{userid}")
	public Cart getCartByUserId(@PathVariable("userid") int userId) {
		return this.cartService.getCartByUserId(userId);
	}

	@GetMapping("/get/{cartId}")
	public Cart getCartById(@PathVariable("cartId") int cartId) {
		return this.cartService.getCartByProductId(cartId);
	}

	@DeleteMapping("get/del/{cartId}")
	public int deleteById(@PathVariable("cartId") int cartId) {
		this.cartService.deleteById(cartId);
		return cartId;
	}
}
