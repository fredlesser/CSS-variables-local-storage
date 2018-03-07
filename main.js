//Variables
//Elements
const form = document.querySelector('form');
const main = document.querySelector('main');
const heading = document.querySelector('h1');
const text = document.querySelector('p');

//Inputs
//Heading
const headingInput = form.querySelector('input[id=headingInput]');
const headingBgInput = form.querySelector('input[id=headingBgInput]');
const headingColorInput = form.querySelector('input[id=headingColorInput]');
const headingSizeInput = form.querySelector('input[id=headingSizeInput]');


const textAreaInput = form.querySelector('#textAreaInput');
const textBgInput = form.querySelector('input[id=textBgInput]');
const textSizeInput = form.querySelector('input[id=textSizeInput]');
const textColorInput = form.querySelector('input[id=textColorInput]');

const colorInputs = form.querySelectorAll('input[type=color]');
const rangeInputs = form.querySelectorAll('input[type=range]');

const bgImageInput = form.querySelector('input[id=bgImageInput]');

const textAlignInput = form.querySelector('select[id=textAlignInput]');
const fontFamilyInput = form.querySelector('select[id=fontFamilyInput]');



//Load form data from local storage
const formData = JSON.parse(localStorage.getItem('formData')) || [];

function loadFormData() {
  const formInputs = form.querySelectorAll('.input');
  formInputs.forEach(formInput => {
    headingInput.value = formData.headingInputData;
    headingBgInput.value = formData.headingBgInputData;
    headingColorInput.value = formData.headingColorInputData;
    headingSizeInput.value = formData.headingSizeInputData;
    
    textAreaInput.value = formData.textAreaInputData;
    textBgInput.value = formData.textBgInputData;
    textColorInput.value = formData.textColorInputData;
    textSizeInput.value = formData.textSizeInputData;
    
    bgImageInput.value = formData.bgImageInputData;
    
    fontFamilyInput.value = formData.fontFamilyInputData;
    textAlignInput.value = formData.textAlignInputData;
  });
}

function submitForm(e) {
  e.preventDefault();
  const headingInputData = headingInput.value;
  const headingBgInputData = headingBgInput.value;
  const headingColorInputData = headingColorInput.value;
  const headingSizeInputData = headingSizeInput.value;
  
  
  const textAreaInputData = textAreaInput.value;
  const textBgInputData = textBgInput.value;
  const textColorInputData = textColorInput.value;
  const textSizeInputData = textSizeInput.value;
  
  const bgImageInputData = bgImageInput.value;
  
  const fontFamilyInputData = fontFamilyInput.value;
  const textAlignInputData = textAlignInput.value;

  const formData = {
    headingInputData: headingInputData,
    headingBgInputData: headingBgInputData,
    headingColorInputData: headingColorInputData,
    headingSizeInputData: headingSizeInputData,
    
    textAreaInputData: textAreaInputData,
    textBgInputData: textBgInputData,
    textColorInputData: textColorInputData,
    textSizeInputData: textSizeInputData,
    
    bgImageInputData: bgImageInputData,
    
    fontFamilyInputData: fontFamilyInputData,
    textAlignInputData: textAlignInputData,
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
  main.style.backgroundImage = "url(" + bgImageInput.value + ")";
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
headingInput.addEventListener('keyup', () => updateText(heading, headingInput));
textAreaInput.addEventListener('keyup',  () => updateText(text, textAreaInput));

bgImageInput.addEventListener('change', updateBackgroundImage);

rangeInputs.forEach(input => input.addEventListener('change', handleChange));
rangeInputs.forEach(input => input.addEventListener('mousemove', handleChange));

colorInputs.forEach(input => input.addEventListener('change', handleChange));

fontFamilyInput.addEventListener('change', handleChange);
textAlignInput.addEventListener('change', handleChange);

form.addEventListener('submit', submitForm);

//Update on page load
loadFormData();

updateText(heading, headingInput);
updateVar(headingBgInput);
updateVar(headingColorInput);
updateVar(headingSizeInput);

updateText(text, textAreaInput);
updateVar(textBgInput);
updateVar(textColorInput);
updateVar(textSizeInput);

updateBackgroundImage();

updateVar(fontFamilyInput);
updateVar(textAlignInput);