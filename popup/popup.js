

const data = fetch("http://localhost:3000/scrape?url=https://earn.christex.foundation/")
.then(response => response.json)

document.getElementById('notify').addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'notify', message: data.message });
});

document.getElementById('resources').addEventListener('click', () => {
  const resources = ['Resource 1', 'Resource 2', 'Resource 3'];
  document.getElementById('output').innerHTML = resources.join('<br>');
});
