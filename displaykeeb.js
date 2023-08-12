// keyboard related JS starts here 

const codeToElement = {
    'Escape': document.getElementById('key-esc'),
    'Digit1': document.getElementById('key-1'),
    'Digit2': document.getElementById('key-2'),
    'Digit3': document.getElementById('key-3'),
    'Digit4': document.getElementById('key-4'),
    'Digit5': document.getElementById('key-5'),
    'Digit6': document.getElementById('key-6'),
    'Digit7': document.getElementById('key-7'),
    'Digit8': document.getElementById('key-8'),
    'Digit9': document.getElementById('key-9'),
    'Digit0': document.getElementById('key-0'),
    'Minus': document.getElementById('key-minus'),
    'Equal': document.getElementById('key-equals'),
    'Backspace': document.getElementById('key-backspace'),
    'Tab': document.getElementById('key-tab'),
    'KeyQ': document.getElementById('key-q'),
    'KeyW': document.getElementById('key-w'),
    'KeyE': document.getElementById('key-e'),
    'KeyR': document.getElementById('key-r'),
    'KeyT': document.getElementById('key-t'),
    'KeyY': document.getElementById('key-y'),
    'KeyU': document.getElementById('key-u'),
    'KeyI': document.getElementById('key-i'),
    'KeyO': document.getElementById('key-o'),
    'KeyP': document.getElementById('key-p'),
    'BracketLeft': document.getElementById('key-left-bracket'),
    'BracketRight': document.getElementById('key-right-bracket'),
    'Backslash': document.getElementById('key-slash'),
    'CapsLock': document.getElementById('key-caps'),
    'KeyA': document.getElementById('key-a'),
    'KeyS': document.getElementById('key-s'),
    'KeyD': document.getElementById('key-d'),
    'KeyF': document.getElementById('key-f'),
    'KeyG': document.getElementById('key-g'),
    'KeyH': document.getElementById('key-h'),
    'KeyJ': document.getElementById('key-j'),
    'KeyK': document.getElementById('key-k'),
    'KeyL': document.getElementById('key-l'),
    'Semicolon': document.getElementById('key-semicolon'),
    'Quote': document.getElementById('key-apostrophe'),
    'Enter': document.getElementById('key-enter'),
    'ShiftLeft': document.getElementById('key-right-shift'),
    'KeyZ': document.getElementById('key-z'),
    'KeyX': document.getElementById('key-x'),
    'KeyC': document.getElementById('key-c'),
    'KeyV': document.getElementById('key-v'),
    'KeyB': document.getElementById('key-b'),
    'KeyN': document.getElementById('key-n'),
    'KeyM': document.getElementById('key-m'),
    'Comma': document.getElementById('key-comma'),
    'Period': document.getElementById('key-period'),
    'Slash': document.getElementById('key-slash'),
    'ShiftRight': document.getElementById('key-left-shift'),
    'ControlLeft': document.getElementById('key-left-ctrl'),
    'MetaLeft': document.getElementById('key-win'),
    'AltLeft': document.getElementById('key-left-alt'),
    'Space': document.getElementById('key-space'),
    'AltRight': document.getElementById('key-right-alt'),
    'Fn': document.getElementById('key-fn'),
    'MetaRight': document.getElementById('key-right-win'),
    'ControlRight': document.getElementById('key-right-ctrl'),
  };
  
  // Function to add the "pressed" class to a key element
  const addPressedClass = (el) => {
    if (el) {
      el.classList.add('pressed');
    }
  };
  
  // Function to remove the "pressed" class from a key element
  const removePressedClass = (el) => {
    if (el) {
      el.classList.remove('pressed');
    }
  };
  
  // Create an <audio> element reference for the key press sound
  const keyPressSound = document.getElementById('keyPressSound');
  
  let websiteFunctionalityEnabled = true;
  
  // Function to handle key press actions
  const handleKeyPress = (eCode) => {
    const el = codeToElement[eCode];
    addPressedClass(el);
  
    // Play the key press sound
    keyPressSound.currentTime = 0; // Rewind the audio to start
    keyPressSound.play();
  
    // Check if the pressed key is "Esc"
    if (eCode === 'Escape') {
      // Toggle website functionality on/off
      websiteFunctionalityEnabled = !websiteFunctionalityEnabled;
  
      if (websiteFunctionalityEnabled) {
        console.log('Website functionality enabled');
      } else {
        console.log('Website functionality disabled');
      }
    }
  
    // Check if the pressed key is "KeyS" (the "s" key) and website functionality is enabled
    if (websiteFunctionalityEnabled && eCode === 'KeyK') {
      // Open a specific website in a new tab when the "s" key is pressed
      window.open('categorypage.html', '_blank');
    }
    
    if (websiteFunctionalityEnabled && eCode === 'Space') {
      // Open a specific website in a new tab when the "s" key is pressed
      window.open('showcase.html', '_blank');
    }

    // Check if the pressed key is "KeyG" and website functionality is enabled
    if (websiteFunctionalityEnabled && eCode === 'KeyG') {
      // Open another specific website in a new tab when the "g" key is pressed
      window.open('https://aman-byte.github.io', '_blank');
    }
  };
  
  // Event listener for the keydown event
  window.addEventListener('keydown', (e) => {
    handleKeyPress(e.code);
  });
  
  // Event listener for the keyup event
  window.addEventListener('keyup', (e) => {
    const el = codeToElement[e.code];
    removePressedClass(el);
  });
  
  // Event listener for mouse click on the keyboard elements
  Object.values(codeToElement).forEach((element) => {
    element.addEventListener('mousedown', () => {
      const eCode = element.getAttribute('data-key-code');
      handleKeyPress(eCode);
    });
  
    element.addEventListener('mouseup', () => {
      removePressedClass(element);
    });
  
    element.addEventListener('mouseleave', () => {
      removePressedClass(element);
    });
  });
  
  // keyboard related js ends here

  // Popup JS
  document.addEventListener("DOMContentLoaded", function() {
    const popupContainer = document.getElementById("popup-container");
    const closePopupButton = document.getElementById("close-popup");
    const showPopupButton = document.getElementById("show-popup");
  
    function showPopup() {
        popupContainer.style.display = "flex";
    }
  
    function closePopup() {
        popupContainer.style.display = "none";
    }
  
    showPopupButton.addEventListener("click", showPopup);
    closePopupButton.addEventListener("click", closePopup);
  });
  