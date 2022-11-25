import { Link, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import { useQuery } from "react-query";
import getData from "../../utils/api";

import BookablesList from "../Bookables/BookablesList";
import BookableDetails from "../Bookables/BookableDetails";

export default function BookablesView() {
  const { data: bookables = [] } = useQuery(
    "bookables",
    () => getData("http://localhost:8080/bookables"),
    {
      suspense: true
    }
  );

  const { id } = useParams();
  const bookable = bookables.find(
    b => b.id === parseInt(id, 10)
  ) || bookables[0];

  return (
    <main className="bookables-page">
      <div>
        {/* <BookablesList
          bookable={bookable}
          bookables={bookables}
          isShowBookableDetail={true}
          getUrl={id => `/bookables/${id}`}
        /> */}

        <p className="controls">
          <Link
            to="/bookables/new"
            replace={true}
            className="btn">
            <FaPlus />
            <span>New</span>
          </Link>
        </p>
      </div>

      {/* <BookableDetails bookable={bookable} /> */}
    </main>
  );
}