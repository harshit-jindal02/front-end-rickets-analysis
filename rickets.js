const form = document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    var calcium = (document.getElementById("calcium-level").value);
    var phosphorus = (document.getElementById("phosphorus-level").value);
    
    const result = analyzeRickets(age, calcium, phosphorus);
    alert(result);
});

function analyzeRickets(age, calcium, phosphorus) {
    if (age <= 1 && (calcium < 7.8 || phosphorus < 4.0)) {
      return "Rickets detected in infants.";
    } else if (age > 1 && age <= 5 && (calcium < 8.8 || phosphorus < 4.0)) {
      return "Rickets detected in toddlers and young children.";
    } else if (age > 5 && age <= 12 && (calcium < 8.8 || phosphorus < 3.0)) {
      return "Rickets detected in older children.";
    } else if (age > 12 && age <= 18 && (calcium < 8.8 || phosphorus < 2.5)) {
      return "Rickets detected in adolescents.";
    } else {
        return "No signs of Rickets.";
    }
  }