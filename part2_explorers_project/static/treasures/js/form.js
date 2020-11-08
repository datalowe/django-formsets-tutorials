// const addFormBtn = document.getElementById('add-form-btn');
// alert(addFormBtn.innerHTML);

const totalFormsInput = document.getElementsByName('form-TOTAL_FORMS')[0];
const initFormsInput = document.getElementsByName('form-INITIAL_FORMS')[0];
const minFormsInput = document.getElementsByName('form-MIN_NUM_FORMS')[0];
const maxFormsInput = document.getElementsByName('form-MAX_NUM_FORMS')[0];

const statusMsg = `
    There are currently ${totalFormsInput.value} forms in use, excluding
    the 'meta' form. There were initially ${initFormsInput.value} forms.
    The minimum number of forms allowed is ${minFormsInput.value}, and the
    maximum is ${maxFormsInput.value}.
`
alert(statusMsg);
