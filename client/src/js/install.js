// const butInstall = document.getElementById('buttonInstall');

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {});

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {});

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {});


const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // To store the deferred prompt

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser prompt
  event.preventDefault();

  // Store the event for later use
  deferredPrompt = event;

  // Show the install button
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the browser prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const result = await deferredPrompt.userChoice;

    // Reset the deferred prompt variable
    deferredPrompt = null;

    // Hide the install button
    butInstall.style.display = 'none';

    // Check the user's choice
    if (result.outcome === 'accepted') {
      console.log('PWA installation accepted');
    } else {
      console.log('PWA installation rejected');
    }
  }
});

// Event handler for the 'appinstalled' event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed');
});
