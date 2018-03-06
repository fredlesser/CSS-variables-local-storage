//Variables
const form = document.querySelector('form');
const main = document.querySelector('main');
const textInput = form.querySelector('input[type=text]');
const textArea = form.querySelector('textarea');
const font = form.querySelector('select[id=font]');
const align = form.querySelector('select[id=align]');
const colorInputs = form.querySelectorAll('input[type=color]');
const forground = form.querySelector('input[id=forground]');
const background = form.querySelector('input[id=background]');
const bgImage = form.querySelector('input[id=bgImage]');
const textColor = form.querySelector('input[id=textColor]');
const rangeInputs = form.querySelectorAll('input[type=range]');
const heading = document.querySelector('h1');
const headingSize = form.querySelector('input[id=headingSize]');
const headingColor = form.querySelector('input[id=headingColor]');
const text = document.querySelector('p');
const textSize = form.querySelector('input[id=textSize]');

//Load form data from local storage
const formData = JSON.parse(localStorage.getItem('formData')) || [];

function loadFormData() {
  const formInputs = form.querySelectorAll('input');
  formInputs.forEach(formInput => {
    textInput.value = formData.heading;
    textArea.value = formData.textArea;
    font.value = formData.font;
    align.value = formData.align;
    forground.value = formData.forground;
    background.value = formData.background;
    bgImage.value = formData.bgImage;
    textColor.value = formData.textColor;
    headingSize.value = formData.headingSize;
    headingColor.value = formData.headingColor;
    textSize.value = formData.textSize;
  })
}

function submitForm(e) {
  e.preventDefault();
  const heading = (this.querySelector('[id=heading]')).value;
  const textArea = (this.querySelector('[id=textArea]')).value;
  const font = (this.querySelector('[id=font]')).value;
  const align = (this.querySelector('[id=align]')).value;
  const forground = (this.querySelector('[id=forground]')).value;
  const background = (this.querySelector('[id=background]')).value;
  const bgImage = (this.querySelector('[id=bgImage]')).value;
  const textColor = (this.querySelector('[id=textColor]')).value;
  const headingSize = (this.querySelector('[id=headingSize]')).value;
  const headingColor = (this.querySelector('[id=headingColor]')).value;
  const textSize = (this.querySelector('[id=textSize]')).value;
  const formData = {
    heading: heading,
    font: font,
    align: align,
    textArea: textArea,
    forground: forground,
    background: background,
    bgImage: bgImage,
    textColor: textColor,
    headingSize: headingSize,
    headingColor: headingColor,
    textSize: textSize,
  }
  localStorage.setItem('formData', JSON.stringify(formData));
  console.log(formData);
}
//Functions to handle changes/updates
function handleChange() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
}

function updateBackgroundImage() {
  main.style.backgroundImage = "url(" + bgImage.value + ")";
  console.log(main);
}

function updateText(el, target) {
  el.textContent = target.value
}

function updateVar(variable) {
  const suffix = variable.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${variable.id}`, variable.value + suffix);
}

//Handle live changes
textInput.addEventListener('keyup', () => updateText(heading, textInput));
textArea.addEventListener('keyup',  () => updateText(text, textArea));
font.addEventListener('change', handleChange);
align.addEventListener('change', handleChange);
bgImage.addEventListener('change', updateBackgroundImage);
rangeInputs.forEach(input => input.addEventListener('change', handleChange));
rangeInputs.forEach(input => input.addEventListener('mousemove', handleChange));
colorInputs.forEach(input => input.addEventListener('change', handleChange));
form.addEventListener('submit', submitForm);

//Update on page load
loadFormData();
updateText(heading, textInput);
updateText(text, textArea);
updateVar(forground);
updateVar(background);
updateBackgroundImage();
updateVar(headingSize);
updateVar(headingColor);
updateVar(textSize);
updateVar(textColor);
updateVar(align);
updateVar(font);