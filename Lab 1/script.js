

function showConfirmClick(event) {
  navigator.notification.alert("Text", () => {}, ['Glorious Alert Box'], ['Exit', 'Restart']);
}
