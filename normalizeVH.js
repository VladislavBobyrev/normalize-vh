function normalize100vh() {
  const setHeight = () => {
    const vh = window.innerHeight * 0.01; // наxодим  1vh
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // --vh использовать в css -> height: calc(var(--vh) * 100);
  };

  setHeight();
  window.addEventListener('resize', setHeight);
}

normalize100vh();
