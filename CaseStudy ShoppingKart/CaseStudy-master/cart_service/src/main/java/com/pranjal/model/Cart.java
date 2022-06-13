package com.pranjal.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Cart")
public class Cart {
	@Id
	private int cartId;
	private int productId;
	private String productName;
	private int userId;
	private int quantity;
	private int price;

	public int getCartId() {
		return cartId;
	}
	public void setCartId(int cartId) {
		this.cartId = cartId;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Cart(int cartId, int productId, String productName, int userId, int quantity, int price) {
		this.cartId = cartId;
		this.productId = productId;
		this.productName = productName;
		this.userId = userId;
		this.quantity = quantity;
		this.price = price;
	}

	public Cart() {
		super();
	}
}
