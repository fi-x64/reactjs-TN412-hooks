import { useEffect, useState } from "react";
import WeekPicker from "../../components/WeekPicker";

import { getWeek, shortISO } from "../../utils/date-wrangler";
import { useBookingsParams, useBookings } from "./bookingsHooks";
// import BookingsGridSlide from "./BookingsGridSlide";
// import BookingDetails from "./BookingDetails";

export default function Bookings({ bookable }) {
  const [booking, setBooking] = useState(null);

  const { date } = useBookingsParams();
  const week = getWeek(date);
  const weekStart = shortISO(week.start);

  const { bookings } = useBookings(bookable?.id, week.start, week.end);
  const selectedBooking = bookings?.[booking?.session]?.[booking.date];

  useEffect(() => {
    setBooking(null);
  }, [bookable, weekStart]);

  useEffect(() => {
    if (booking?.id !== undefined && !selectedBooking) {
      setBooking(null);
    }
  }, [booking, selectedBooking]);

  return (
    <div className="bookings">
      <div>
        {/* <BookingsGridSlide
          week={week}
          bookable={bookable}
          booking={booking}
          setBooking={setBooking}
        /> */}
      </div>

      {/* <BookingDetails
        booking={selectedBooking || booking}
        bookable={bookable}
      /> */}
    </div>
  );
}