// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    apiKey: 'AIzaSyDGW9Vck5jjrkXP2UigkojoGzZRV8vcQY0',
    authDomain: 'noteapp-a2b73.firebaseapp.com',
    databaseURL: 'https://noteapp-a2b73.firebaseio.com',
    projectId: 'noteapp-a2b73',
    storageBucket: 'noteapp-a2b73.appspot.com',
    messagingSenderId: "424428061645",
    appId: "1:424428061645:web:b1e58665fc9c8735e73a84",
    measurementId: 'G-E0EG5PN8HS',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);
    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };
    return self.registration.showNotification(
        title,
        options,
    );
});
