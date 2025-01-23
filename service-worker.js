// Fetch data from the Christex bounties URL and send a notification
const fetchDataAndNotify = async () => {
  const url = "https://earn.christex.foundation/";
  try {
    const res = await fetch(`http://localhost:3000/scrape?url=${url}`);
    const data = await res.json();
    const message = data.message || "No new updates at the moment.";

    // Notify only if there are new updates
    if (data.newBounties && data.newBounties.length > 0) {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'assets/icon.png',
        title: 'Christex Community Update',
        message,
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Start fetching data periodically
const startFetching = () => {
  fetchDataAndNotify(); // Fetch immediately on startup
  setInterval(fetchDataAndNotify, 60000); // Repeat every 1 minute
};

// Listen for the installation or update event
chrome.runtime.onInstalled.addListener(() => {
  console.log("Christex extension installed or updated.");
});

// Start fetching data when the service worker activates
startFetching();
