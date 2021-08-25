package com.roombooking.controller;

import java.util.List;

import com.roombooking.entity.Booking;
import com.roombooking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(maxAge = 3600)
@RestController
public class BookingController {


	@CrossOrigin("http://vigneshs-air.fritz.box:3000")
	@GetMapping("/hello")
	public String hello() {

		return "Hello World";
	}
	
	@Autowired
	private BookingService service;

	@PostMapping("/savebooking")
	public Booking saveBooking(@RequestBody Booking booking) {
		System.out.println(booking.toString());
		return service.saveBooking(booking);
	}

	@GetMapping("/displaybookings")
	public List<Booking> getBookingDetails() {

		return service.getBookingDetails();
	}

	@GetMapping("/getbooking")
	public Booking getBookingDetailsByRoomNumber(@PathVariable int roomNumber) {

		return service.getBookingDetailsByRoomNumber(roomNumber);
	}

	@DeleteMapping("/delete/{id}")
	public String deleteBooking(@PathVariable int roomNumber) {

		return service.deleteBooking(roomNumber);
	}
}
