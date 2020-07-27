function initPage() {
  var themeButton = document.getElementById('theme-button')
  function onButtonClick() {
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
      themeButton.innerHTML = 'LIGHT THEME'
    } else {
      themeButton.innerHTML = 'DARK THEME'
    }
  }

  themeButton.onmouseup = onButtonClick
}

document.addEventListener('DOMContentLoaded', initPage)
