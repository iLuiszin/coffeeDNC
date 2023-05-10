window.onload = function () {
  var modal = document.getElementById('customModal')
  var btn = document.getElementById('modalButton')
  var span = document.getElementsByClassName('close')[0]

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0]

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    showPopup()
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    hidePopup()
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      hidePopup()
    }
  }

  function showPopup() {
    modal.className = 'custom-modal custom-modal-enabled'
  }

  function hidePopup() {
    modal.className = 'custom-modal custom-modal-disabled'
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async function showPopups() {
    for (let i = 0; i < 10; i++) {
      showPopup()
      await delay(5000)
      hidePopup()
      await delay(5000)
    }
  }

  //showPopups();
}
