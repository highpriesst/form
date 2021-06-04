function checkDarkMode() {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return true
    }
    return false
  }
  
  if (checkDarkMode()) {
    document.documentElement.classList.add('mode-dark')
  } else {
    document.documentElement.classList.remove('mode-dark')
  }

 // BUTTON LOGIC GOES HERE, check if above is working before uploding github.
 // logic for inputs, regex like
 // submit buttun check if some important input text is empty
 // company, gender ve prof girmek zorunda degil sadece isim ve yas yollamasi yeter.
 

