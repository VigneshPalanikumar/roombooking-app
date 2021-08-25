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
	 */
	public Booking saveBooking(Booking booking) {

		return repository.save(booking);
	}

	/**Service method to display all the booking details
	 */
	public List<Booking> getBookingDetails() {

		return repository.findAll();
	}

	/**Service method to display details of a particular booking using roomNumber
	 */
	public Booking getBookingDetailsByRoomNumber(int roomNumber) {

		return repository.findById(roomNumber).orElse(null);
	}

	/**Service method to delete the booking
	 */
	public String deleteBooking(int roomNumber) {
		repository.deleteById(roomNumber);
		return "Booking Deleted !!" +roomNumber;
	}
}
