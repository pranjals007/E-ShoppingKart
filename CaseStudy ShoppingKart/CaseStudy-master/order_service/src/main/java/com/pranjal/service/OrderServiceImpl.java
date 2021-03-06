package com.pranjal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.pranjal.model.Address;
import com.pranjal.model.Order;
import com.pranjal.repository.AddressRepository;
import com.pranjal.repository.OrderRepository;
@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private AddressRepository addressRepository;

	@Autowired
	RestTemplate restTemplate;

	@Override
	public Order addOrder(Order order) {
		return this.orderRepository.save(order);
	}

	@Override
	public List<Order> getAllOrders() {
		return this.orderRepository.findAll();
	}



	@Override
	public void deleteOrder(int orderId) {
		this.orderRepository.deleteById(orderId);
	}

	@Override
	public List<Order> getOrderByCustomerId(int customerId) {
		return this.orderRepository.findByCustomerId(customerId);
	}


	@Override
	public List<Address> getAddressByCustomerId(int customerId) {
		return this.addressRepository.findAddressByCustomerId(customerId);
	}



	@Override
	public Order getOrderById(int orderId) {
		return this.orderRepository.findById(orderId).get();
	}

}
