document.addEventListener('DOMContentLoaded', () => {
  // Handle View Resources button
  document.getElementById('resources').addEventListener('click', () => {
    const resources = ['Resource 1', 'Resource 2', 'Resource 3'];
    document.getElementById('output').innerHTML = resources.join('<br>');
  });

  // Handle Bounty Updates button
  document.getElementById('bounty').addEventListener('click', async () => {
    try {
      const url = "https://earn.christex.foundation/";
      const res = await fetch(`http://localhost:3000/scrape?url=${url}`);
      const data = await res.json();
      const message = data.message || "No new updates at the moment.";
      const currentBounties = data.currentBounties || [];
      const newBounties = data.newBounties || [];
      
      // Display the fetched data in the UI
      const output = `
        <h3>Current Bounties:</h3>
        <ul>${currentBounties.map(bounty => `<li>${bounty}</li>`).join('')}</ul>
        <h3>New Bounties:</h3>
        <ul>${newBounties.map(bounty => `<li>${bounty}</li>`).join('')}</ul>
      `;
      document.getElementById('output').innerHTML = output;

      // Send a notification for the update
      chrome.runtime.sendMessage({ 
        type: 'notify', 
        message: message 
      });
    } catch (error) {
      document.getElementById('output').innerHTML = `<p style="color: red;">Error fetching bounties: ${error.message}</p>`;
    }
  });
});
