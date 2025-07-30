self.addEventListener('push', event => {
    if (self.registration && event.data) {
           const data = event.data.json();
          console.log('[Service Worker] Push Received:', data);
   
 
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/logo192.png',
    });
  } else {
    console.error('Không thể hiển thị thông báo, data hoặc registration không hợp lệ');
  }
   
});