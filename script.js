// File: script.js
function calculateDuration() {
  const start = new Date(document.getElementById("startTime").value);
  const end = new Date(document.getElementById("endTime").value);
  const result = document.getElementById("result");

  if (!start || !end || isNaN(start) || isNaN(end)) {
    result.textContent = "Please select valid start and end times.";
    result.style.color = "red";
    return;
  }

  if (end < start) {
    result.textContent = "End time must be after start time!";
    result.style.color = "red";
    return;
  }

  const durationMs = end - start;
  const totalMinutes = Math.floor(durationMs / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  let text = "Duration: ";
  if (days > 0) text += `${days} d `;
  if (hours > 0) text += `${hours} h `;
  if (minutes > 0) text += `${minutes} m `;
  text += `(Total: ${totalMinutes} min)`;

  result.textContent = text;
  result.style.color = "lightgreen";
}

const encCred = "wqkgMjAyNSBKYWtl"; 
const decodedText = decodeURIComponent(escape(atob(encCred)));
document.getElementById("credit-label").textContent = decodedText;
