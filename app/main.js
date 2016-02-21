/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
/* eslint-env browser */

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    // Service worker isn't supported
    return;
  }

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

    if (!isLocalhost && window.location.protocol !== 'https:') {
      console.warn('Service worker is supported in this browser but cannot ' +
        'work on a page that isn\'t accessed by HTTPS.');
      return;
    }

    navigator.serviceWorker.register('service-worker.js')
    .catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
}

(function() {
  'use strict';

  registerServiceWorker();

  // Your custom JavaScript goes here
})();
