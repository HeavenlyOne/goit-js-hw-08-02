import throttle from "lodash.throttle";

const KEY_FORM = "feedback-form-state";
const formType = document.querySelector(".feedback-form");

formType.addEventListener('input', throttle(onInput, 500));
// formType.addEventListener('input', onInput);

formType.addEventListener('submit', onSubmit);
let forms = {
        email: '',
        message: '',
    };

const parsed = JSON.parse(localStorage.getItem(KEY_FORM))

forms.email = (parsed && parsed.email ) ?? "";
forms.message = (parsed && parsed.message) ?? '';

formType.elements.email.value = (parsed && parsed.email ) ?? '';
formType.elements.message.value = (parsed && parsed.message) ?? '';

    

function onInput(event) {

    if (event.target.nodeName === 'INPUT') {
        forms.email = event.target.value.trim();
    }
    if (event.target.nodeName === 'TEXTAREA') {
        forms.message = event.target.value.trim();
    }
    localStorage.setItem(KEY_FORM, JSON.stringify(forms));
   
}


function onSubmit(event) {
    event.preventDefault();
    if (!forms.email || !forms.message) {
        alert('Fill please all fields');
    } else {
        console.log(forms);
        localStorage.removeItem(KEY_FORM);
        forms.email = '';
        forms.message = ''; 
        this.reset();
    }
}