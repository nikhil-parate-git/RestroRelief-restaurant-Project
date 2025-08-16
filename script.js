let categories = document.getElementsByClassName("menu-category");
function showMenu(category) {
  for (let i = 0; i < categories.length; i++) {
    categories[i].classList.add(
      "d-none"
    ); /* using d-none By default, only one section (like breakfast) is visible.*/
    /* We hide the others (lunch, dinner) with d-none.*/
  }
  document.getElementById(category).classList.remove("d-none");

  let tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove(
      "active"
    ); /*This part of code highlights the individual tabs when user can click*/
  }
}
/* Feedback FORM*/
let FeedbackForm = document.getElementById("feedback");
if (FeedbackForm) {
  /*if not using in this code we return the null on onsubmit event*/
  FeedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your feedback!");
    this.reset();
  });
}

/*Booking Form */

let bookingForm = document.getElementById("bookingform");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {        /* addEventListener is the best way for click event because
                                                                its does not overide any other event */
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    localStorage.setItem("bookingName", name);
    localStorage.setItem("bookingEmail", email);

    alert("Thank you! Your booking has been received.");
    this.reset();
  });
}
