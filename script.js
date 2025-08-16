// Toggle sections
const toggleIngredients = document.getElementById("toggleIngredients");
const toggleEquipment = document.getElementById("toggleEquipment");
const ingredients = document.getElementById("ingredients");
const equipment = document.getElementById("equipment");

toggleIngredients.addEventListener("click", () => {
  ingredients.classList.toggle("hidden");
});
toggleEquipment.addEventListener("click", () => {
  equipment.classList.toggle("hidden");
});

// Steps navigation
const steps = document.querySelectorAll("#steps ol li");
const nextBtn = document.getElementById("nextStep");
const progressBar = document.getElementById("progressBar");
const stepsSection = document.getElementById("steps");
const endMessage = document.getElementById("endMessage");
const restartBtn = document.getElementById("restart");

let currentStep = 0;

function updateSteps() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });

  // Progress bar update
  const percent = ((currentStep + 1) / steps.length) * 100;
  progressBar.style.width = percent + "%";
}

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateSteps();
  } else {
    stepsSection.classList.add("hidden");
    endMessage.classList.remove("hidden");
  }
});

// Restart recipe
restartBtn.addEventListener("click", () => {
  currentStep = 0;
  updateSteps();
  stepsSection.classList.remove("hidden");
  endMessage.classList.add("hidden");
});

// Start Cooking button
const startCookingBtn = document.getElementById("startCooking");
startCookingBtn.addEventListener("click", () => {
  document.getElementById("steps").scrollIntoView({ behavior: "smooth" });
});

updateSteps();
