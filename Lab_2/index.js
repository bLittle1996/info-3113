document.addEventListener('deviceready', () => {
  properties = [
    device.cordova,
    device.model,
    device.platform,
    device.uuid,
    device.manufacturer,
    device.isVirtual,
    device.serial
  ]
  for(var i = 0; i < properties.length; i++) {
    console.log(properties[i]);
  }
}, false)

function onDeviceReady() {
  // ...
  properties = [
    device.cordova,
    device.model,
    device.platform,
    device.uuid,
    device.manufacturer,
    device.isVirtual,
    device.serial
  ]
  for(var i = 0; i < properties.length; i++) {
    console.log(properties[i]);
  }
}
