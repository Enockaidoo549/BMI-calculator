function bmi_calculator() {
  let heightInput = document.querySelector('.height-input');
  let weightInput = document.querySelector('.weight-input');
  let metricRadio = document.querySelector('.metric');
  let imperialRadio = document.querySelector('.imperial');

  heightInput.addEventListener('input', calculateBMI);
  weightInput.addEventListener('input', calculateBMI);

  imperialRadio.addEventListener('click', function() {
    metricRadio.disabled = true;
  });

  metricRadio.addEventListener('click', function() {
    imperialRadio.disabled = true;
  });
}

function calculateBMI() {
  let heightInput = document.querySelector('.height-input');
  let weightInput = document.querySelector('.weight-input');

  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    console.log("Invalid input values");
    return;
  }

  let bmi = weight / (height * height);

  console.log("Height:", height);
  console.log("Weight:", weight);
  console.log("BMI:", bmi);
}

bmi_calculator();
