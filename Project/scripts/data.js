setInterval(() => {
  const data = {
    timestamp: new Date().toISOString(),
    location: "Lat: 0, Lon: 0",
    messages: "User message: " + Math.random().toString(36).substring(7)
  };
  document.getElementById("dataDisplay").textContent = JSON.stringify(data, null, 2);
}, 5000);