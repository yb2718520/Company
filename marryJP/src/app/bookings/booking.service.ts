import { Booking } from './booking.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: Booking[] = [
    {
    id: 'xyz',
    placeId: 'p1',
    placeTitle: 'Houston',
    guestNumber: 2,
    userId: 'abd'
  }];

  get getBookings() {
    return [...this.bookings];
  }
}
