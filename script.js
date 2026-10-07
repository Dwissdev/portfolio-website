const dateTarget = document.getElementById("today-date");
const timeTarget = document.getElementById("current-time");

function updateClock() {
  const now = new Date();
  if (dateTarget) {
    dateTarget.textContent = now.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  if (timeTarget) {
    timeTarget.textContent = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}

updateClock();
setInterval(updateClock, 30000);

const form = document.querySelector(".booking-form");
const bookingNote = document.getElementById("booking-status");
const routeCards = document.querySelectorAll(".route-card");

routeCards.forEach((card) => {
  card.addEventListener("click", () => {
    routeCards.forEach((item) => item.classList.remove("active-route"));
    card.classList.add("active-route");
  });
});

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const from = form.querySelector("#fromStation")?.value || "";
    const to = form.querySelector("#toStation")?.value || "";

    if (!from || !to || from === to) {
      bookingNote.textContent =
        "Please choose a valid departure and destination.";
      bookingNote.style.color = "#ffc857";
      return;
    }

    const date = form.querySelector("#travelDate")?.value || "today";
    bookingNote.textContent = `Booking ready: ${from} to ${to} on ${date}. Proceed to checkout.`;
    bookingNote.style.color = "#7fe5d5";
  });
}
