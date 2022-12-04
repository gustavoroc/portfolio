const toggle = (name) => {
  const elementToBeToggled = document.querySelector(name);
  elementToBeToggled.classList.toggle("disabled");
  return elementToBeToggled;
};

export default toggle;
