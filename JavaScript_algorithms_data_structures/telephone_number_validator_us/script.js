document.getElementById("check-btn").addEventListener("click", function () {
  const userInput = document.getElementById("user-input").value.trim();
  const resultsDiv = document.getElementById("results-div");

  if (userInput === "") {
    alert("Please provide a phone number");
    return;
  }

  const isValid = validatePhoneNumber(userInput);

  if (isValid) {
    resultsDiv.innerText = `Valid US number: ${userInput}`;
  } else {
    resultsDiv.innerText = `Invalid US number: ${userInput}`;
  }
});

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("results-div").innerText = "";
  document.getElementById("user-input").value = "";
});

function validatePhoneNumber(phone) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  return regex.test(phone);
}