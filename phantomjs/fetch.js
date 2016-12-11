/* eslint-disable */
var fs = require('fs');
var page = require('webpage').create();
var system = require('system');

const url = system.args[1];
const TIMEOUT_MS = system.args[2];

if (!url) {
  phantom.exit(1);
}

const tid = setTimeout(function () {
  console.log('timeout', TIMEOUT_MS);
  phantom.exit(1);
}, TIMEOUT_MS);

page.settings.javascriptEnabled = false
page.settings.loadImages = false;

function handleOnPageOpen(status) {
  clearTimeout(tid);
  if(status === "success") {
    console.log(page.content);
    phantom.exit(0);
  } else {
    phantom.exit(1);
  }
}

page.open(url, handleOnPageOpen);
