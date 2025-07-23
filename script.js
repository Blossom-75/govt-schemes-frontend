document.getElementById("scheme-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    age: parseInt(document.getElementById("age").value),
    gender: document.getElementById("gender").value,
    income: parseInt(document.getElementById("income").value),
    state: document.getElementById("state").value,
    problem: document.getElementById("problem").value.toLowerCase()
  };

  const res = await fetch("http://localhost:3000/api/schemes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const schemes = await res.json();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (schemes.length === 0) {
    resultsDiv.innerHTML = "<p>No matching schemes found.</p>";
  } else {
    schemes.forEach(s => {
      resultsDiv.innerHTML += `<div><h3>${s.name}</h3><p>${s.description}</p></div>`;
    });
  }
});
