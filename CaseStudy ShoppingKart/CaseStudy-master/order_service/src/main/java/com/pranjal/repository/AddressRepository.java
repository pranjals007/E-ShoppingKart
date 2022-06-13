package com.pranjal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pranjal.model.Address;

import java.util.List;

public interface AddressRepository extends MongoRepository<Address, Integer> {

    public List<Address> findAddressByCustomerId(int customerId);

}