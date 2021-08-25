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

	/**Service method to save the booking details entered by the user
	 *
	 * returns the object which has booking data to the 
	 */
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
	
	public Booking getBookingDetailsByRoomNumber(int roomNumber) {

		return repository.findById(roomNumber).orElse(null);
	}
	
	public String deleteBooking(int roomNumber) {
		repository.deleteById(roomNumber);
		return "Booking Deleted !!" +roomNumber;
	}
}
