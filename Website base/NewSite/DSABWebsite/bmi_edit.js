function measureBMI () {
  // true = metric, false = imperial
  let unit = document.getElementById("bmi-metric").checked,
      weight = document.getElementById("bmi-weight"),
      weightu = document.getElementById("bmi-weight-unit"),
      height = document.getElementById("bmi-height"),
      heightu = document.getElementById("bmi-height-unit");
  
  if (unit) {
    weightu.innerHTML = " KG";
    weight.min = 1;
    weight.max = 635;
    heightu.innerHTML = " CM";
    height.min = 54;
    height.max = 272;
  } else {
    weightu.innerHTML = " LBS";
    weight.min = 1;
    weight.max = 635;
    heightu.innerHTML = " IN";
    height.min = 54;
    height.max = 272;
  }
}

function calcBMI () {
  // (A) Get elements
  let bmi = null,
      unit = document.getElementById("bmi-metric").checked, // true = metric, false = imperial
      weight = parseInt(document.getElementById("bmi-weight").value),
      height = parseInt(document.getElementById("bmi-height").value),
      results1_t = document.getElementById("bmi-results1-title"),
	  results1 = document.getElementById("bmi-results1"),
	  results2_t = document.getElementById("bmi-results2-title"),
	  results2 = document.getElementById("bmi-results2"),
	  results3_t = document.getElementById("bmi-results3-title"),
	  results3 = document.getElementById("bmi-results3"),
	  o_results = document.getElementById("bmi-oresults");
	
  // (B) Calculate BMI
  // Metric BMI = Mass (kg) / Height (m) square 
  if (unit) {
    height = height / 100;
    bmi = weight / (height * height);
  }
  // Imperial BMI = 703 X Mass (lbs) / Height (in) square 
  else {
    bmi = 703 * (weight / (height * height));
  }
  // Round off
  bmi = Math.round(bmi * 100) / 100; // Round off 2 decimal places


  o_results.innerHTML = "Results";
  // (C) Show Results with coordinated category
  

  if(bmi < 15){
	results1_t.innerHTML = "BMI:";
    results1.innerHTML = bmi;
	results2_t.innerHTML = "Category:";
	results2.innerHTML = "Very Severely Underweight";
	results3_t.innerHTML = "Suggestions:";
	results3.innerHTML = "What's the research on this?";
  }
  else if(bmi < 16) {
	results1_t.innerHTML = "BMI:";
    results1.innerHTML = bmi;
	results2_t.innerHTML = "Category:";
	results2.innerHTML = "Severely Underweight";
	results3_t.innerHTML = "Suggestions:";
	results3.innerHTML = "What's the research on this?";
    //results.innerHTML = bmi + "- Severely Underweight";
  }
  else if (bmi < 18.5) {
    results1_t.innerHTML = "BMI:";
    results1.innerHTML = bmi;
	results2_t.innerHTML = "Category:";
	results2.innerHTML = "Underweight";
	results3_t.innerHTML = "Suggestions:";
	results3.innerHTML = "What's the research on this?";
	//results.innerHTML = bmi + " - Underweight";
  } else if (bmi < 24.9) {
    results1_t.innerHTML = "BMI:";
    results1.innerHTML = bmi;
	results2_t.innerHTML = "Category:";
	results2.innerHTML = "Healthy Weight";
	results3_t.innerHTML = "Suggestions:";
	results3.innerHTML = "What's the research on this?";
	//results.innerHTML = bmi + " - Healthy Weight";
  } else if (bmi < 29.9) {
    results1_t.innerHTML = "BMI:";
    results1.innerHTML = bmi;
	results2_t.innerHTML = "Category:";
	results2.innerHTML = "Overweight";
	results3_t.innerHTML = "Suggestions:";
	results3.innerHTML = "What's the research on this?";
	//results.innerHTML = bmi + " - Overweight";
  } else if (bmi < 39.9) {
    results1_t.innerHTML = "BMI:";
    results1.innerHTML = bmi;
	results2_t.innerHTML = "Category:";
	results2.innerHTML = "Obese";
	results3_t.innerHTML = "Suggestions:";
	results3.innerHTML = "What's the research on this?";

	//results.innerHTML = bmi + " - Obese";
  } else {
    results1_t.innerHTML = "BMI:";
    results1.innerHTML = bmi;
	results2_t.innerHTML = "Category:";
	results2.innerHTML = "Severely Obese";
	results3_t.innerHTML = "Suggestions:";
	results3.innerHTML = "What's the research on this?";
	//results.innerHTML = bmi + " - Severely Obese";  
	}
  return false;
}
