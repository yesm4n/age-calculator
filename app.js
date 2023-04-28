// Variables

const dayInput = document.querySelector(".input-1");
const monthInput = document.querySelector(".input-2");
const yearInput = document.querySelector(".input-3");
const button = document.querySelector(".icon-arrow");
const dayText = document.querySelector(".text-1");
const monthText = document.querySelector(".text-2");
const yearText = document.querySelector(".text-3");
const titleDays = document.querySelector(".days");
const titleMonths = document.querySelector(".months");
const titleYears = document.querySelector(".years");
const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

// Applying CSS class - default

dayText.classList.add("hidden");
monthText.classList.add("hidden");
yearText.classList.add("hidden");

// Behavior & Requirements for printing input

button.addEventListener("click", () => {
  // Calculate total number of days lived
  const birthDate = new Date(
    `${yearInput.value}-${monthInput.value}-${dayInput.value}`
  );
  const currentDate = new Date();

  // Calculation for years, months, days lived seperately
  const totalDaysLived = Math.floor(
    (currentDate - birthDate) / (1000 * 60 * 60 * 24)
  );
  const yearsLived = Math.floor(totalDaysLived / 365);
  const monthsLived = Math.floor((totalDaysLived % 365) / 30);
  const daysLived = Math.floor((totalDaysLived % 365) % 30);

  // Days arguments & ouput
  if (1 <= dayInput.value && 31 >= dayInput.value) {
    dayText.classList.add("hidden");
    titleDays.textContent = daysLived;
  } else {
    dayText.classList.remove("hidden");
  }
  // Months arguments & output
  if (1 <= monthInput.value && 13 >= monthInput.value) {
    monthText.classList.add("hidden");
    titleMonths.textContent = monthsLived;
    //54 - monthInput.value;
  } else {
    monthText.classList.remove("hidden");
  }
  // Years arguments & output
  if (yearInput.value < currentYear && yearInput.value >= 1920) {
    yearText.classList.add("hidden");
    titleYears.textContent = yearsLived;
  } else {
    yearText.classList.remove("hidden");
  }
});
