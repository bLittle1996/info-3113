document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  //register the listeners from Phonegap
  document.addEventListener('pause', onPause, false);
  document.addEventListener('resume', onResume, false);
}

function onPause() {

}

function onResume() {

}
