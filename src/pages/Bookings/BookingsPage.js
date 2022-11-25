import { useQuery } from "react-query";
import WeekPicker from "../../components/WeekPicker";
import getData from "../../utils/api";
import { shortISO } from "../../utils/date-wrangler";
import { useBookingsParams } from "./bookingsHooks";

import BookablesList from "../Bookables/BookablesList";
import Bookings from "./Bookings";

export default function BookingsPage() {
  const { data: bookables = [] } = useQuery(
    "bookables",
    () => getData("http://localhost:8080/bookables"),
    {
      suspense: true // enable suspense mode
    }
  );

  const { date, bookableId } = useBookingsParams();

  const bookable = bookables.find(
    b => b.id === bookableId
  ) || bookables[0];

  function getUrl(id) {
    const root = `/bookings?bookableId=${id}`;
    return date ? `${root}&date=${shortISO(date)}` : root;
  }

  return (
    <main className="bookings-page">
      <BookablesList
        bookable={bookable}
        bookables={bookables}
        isNotShowBookableDetail={true}
        getUrl={getUrl}
      />
      <WeekPicker date={new Date()} />
      <Bookings
        bookable={bookable}
      />
    </main>
  );
}