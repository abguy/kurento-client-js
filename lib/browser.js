/**
 * Loader for the kurento-client package on the browser
 */

if (typeof window !== 'undefined' && typeof kurentoClient == 'undefined')
  window.kurentoClient = require('.');
