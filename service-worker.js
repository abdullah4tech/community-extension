chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'notify') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'assets/icon.png',
      title: 'Community Update',
      message: request.message
    });
  }
});
