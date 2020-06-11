let APIURL = '';

switch (window.location.hostname) {
    // this is local host name of our react app
    case 'localhost' || '127.0.0.1':
    // this is local host name of our API
    APIURL = 'http://localhost:4000';
    break;
    // this is our deployed react app
    case 'mono-log.herokuapp.com':      // NO HTTPS & NO FORWARD SLASH AT END OF URL
        // this is the full URL of our deployed server/API
        APIURL = 'https://bmagee-pern-server.herokuapp.com' // NO FORWARD SLASH AT END OF URL
    default:
        console.log('cant reach an api')    
}

export default APIURL;