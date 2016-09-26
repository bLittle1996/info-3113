document.addEventListener('deviceready', () => {
  //create an object representing our device from cordova's device plugin!
  //note the use of strings as keys, this will be used to easily print out this information later on
  const deviceInfo = {
    "Device Cordova": device.cordova,
    "Device Model": device.model,
    "Device Platform": device.platform,
    "Device UUID": device.uuid,
    "Deivce Manufacturer": device.manufacturer,
    "Virtual Device": device.isVirtual,
    "Device Serial": device.serial
  }
  //Now, let's create an array that consists of all our keys from deviceInfo. We will use it to not only determine the number of properties in deviceInfo, but also to print them!
  let deviceKeys = Object.keys(deviceInfo)
  //prints out our device info
  let target = document.getElementById('target')
  let generatedHTML = ''
  for(var i = 0; i < deviceKeys.length; i++) {
    console.log(deviceKeys[i] + ': ' + deviceInfo[deviceKeys[i]])

    generatedHTML += deviceKeys[i] + ': ' + deviceInfo[deviceKeys[i]] + '<br>'
  }
  target.innerHTML = generatedHTML
}, false)
