import {FaSpinner} from "react-icons/fa";

export default function PageSpinner () {
  return (
    <p className="page-loading">
      <span>
      <FaSpinner className="icon-loading"/>
    </span>
    </p>
  );
}