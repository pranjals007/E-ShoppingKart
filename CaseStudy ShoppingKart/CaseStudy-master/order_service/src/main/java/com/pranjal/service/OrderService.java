package com.pranjal.service;

import java.util.List;

import com.pranjal.model.Address;
import com.pranjal.model.Order;
public interface OrderService {
	public Order addOrder(Order order);

	public List<Order> getAllOrders();

	public void deleteOrder(int orderId);

	public List<Order> getOrderByCustomerId(int customerId);

	public List<Address> getAddressByCustomerId(int customerId);

	public Order getOrderById(int orderId);
}
 