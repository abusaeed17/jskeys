document.getElementById("searchBox").addEventListener("keyup", filterMatches);

function filterMatches() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let rows = document.querySelectorAll("#alahliSchedule tbody tr");

  let showHome = document.getElementById("homeMatches").checked;
  let showAway = document.getElementById("awayMatches").checked;

  for (let row of rows) {
    let round = row.cells[0].innerText;
    let team = row.cells[1].innerText.toLowerCase();
    let played = row.cells[3].innerText;

    
    if (round.includes(input) || team.includes(input)) {
    
      if ((showHome && played !== "Home") || (showAway && played !== "Away")) {
        row.style.display = "none";
      } else {
        row.style.display = "";
      }
    } else {
      row.style.display = "none";
    }
  }
}
