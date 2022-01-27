const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

// save selected movie data
function setMovieData(movieIndex, moviePrice) {
	localStorage.setItem("selectedMovieIndex", movieIndex);
	localStorage.setItem("selectedMoviePrice", moviePrice);
}

function updateSelectedCount() {
	const selectedSeats = document.querySelectorAll(".row .seat.selected");

	// copy selected Seats into arr
	// Map through array
	// return a new array with the index of the selected seats
	const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

	// Store Seats to Local Storage
	localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
	const selectedSeatsCount = selectedSeats.length;
	count.innerText = selectedSeatsCount;

	total.innerText = selectedSeatsCount * ticketPrice;
}

// Event Listener for pick movie
movieSelect.addEventListener("change", (e) => {
	ticketPrice = +e.target.value;
	setMovieData(e.target.selectedIndex, e.target.value);
	updateSelectedCount();
});

// Event Listener for pick seats
container.addEventListener("click", (e) => {
	if (
		e.target.classList.contains("seat") &&
		!e.target.classList.contains("occupied")
	) {
		e.target.classList.toggle("selected");
	}
	updateSelectedCount();
});
