package com.pranjal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pranjal.model.UserProfile;

public interface ProfileRepository extends MongoRepository<UserProfile, Integer>{

	public UserProfile findAllByMobileNumber(Long id);
	public UserProfile findByFullName(String name);
	
}
