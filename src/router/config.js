const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/reservation"],
    exact: true,
    component: "Reservation",
  },
  {
    path: ["/reservation/booking"],
    exact: true,
    component: "Booking",
  },
  {
    path: ["/activity"],
    exact: true,
    component: "Activity",
  },
  {
    path: ["/contact"],
    exact: true,
    component: "Contact",
  },
];

export default routes;
