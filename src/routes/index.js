/* Pages */
import Home from "../pages/Home/Home.js";
import BookingsPage from "../pages/Bookings/BookingsPage.js";
import BookablesList from "../pages/Bookables/BookablesList.js";
import UsersList from "../pages/Users/UsersList.js";


const routes = [
  { path: "/bookings", component: BookingsPage },
  { path: "/bookables", component: BookablesList },
  { path: "/users", component: UsersList },
  { path: "/", component: Home},
];

export default routes;
