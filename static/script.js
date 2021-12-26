// grabbing all the steps,buttons ,forms
const steps = Array.from(document.querySelectorAll(".step"));
const nextBtn = document.querySelectorAll(".next-btn");
const prevBtn = document.querySelectorAll(".prev-btn");
const form = document.querySelector("form");

// adding event listerner to NEXT and PREVIOUS button
nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    // calling this function to switch to next step
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    // calling this function to swtich to previous step
    changeStep("previous");
  });
});

// function to switch to next or previous step depending on the paramenter passed during function all
function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  // grabbing index of the current active class
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "previous") {
    index--;
  }
  steps[index].classList.add("active");
}

// small form validation and reseting form values after SUBMIT is clicked

