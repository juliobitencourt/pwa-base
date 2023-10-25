self.addEventListener('push', function (event) {
  const payload = event.data.json();

  // Customize the notification here
  const options = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/path-to-icon.png',
  };

  event.waitUntil(
    self.registration.showNotification(payload.notification.title, options)
  );
});