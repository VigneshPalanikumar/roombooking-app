package com.roombooking.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.roombooking.entity.Booking;
import com.roombooking.repository.BookingRepository;

@Service
public class BookingService {

	@Autowired
	private BookingRepository repository;
	
	public Booking saveBooking(Booking booking) {
		return repository.save(booking);
	}

	/**
	 * 
	 * @return
	 */
	public List<Booking> getBookingDetails() {
		return repository.findAll();
	}
	
	public Booking getBookingDetailsById(int bookingId) {
		return repository.findById(bookingId).orElse(null);
	}
	
	public String deleteBooking(int id) {
		repository.deleteById(id);
		return "Booking Deleted !!" +id;
	}
}
