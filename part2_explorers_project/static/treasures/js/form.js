// Grab the <form> element (which, confusingly, wraps around the p elements
// which each constitute a representation of a single "form" as seen
// from Django"s perspective)
const wrapFormEl = document.getElementById("treasure-form");


// Grab the submit button <input> element
const submitBtn = document.getElementById("submit-button");


// Grab the total number of forms already shown to the user
// (which is also the number that our new form should have in its id/name,
// since Django uses 0-indexing for numbering the forms)
const totalFormsInput = document.getElementById("id_form-TOTAL_FORMS");
const totalFormsValue = totalFormsInput.value;


// Create the header <h2> element for the new form/set of inputs
const newFormH2 = document.createElement("h2");
newFormH2.id = "form-" + totalFormsValue + "-h2";
newFormH2.innerHTML = `
    Totally cool new form
`;
// Add the new <h2> element as a child node of the HTML <form> element, 
// inserting it right before the submit button <input> element
wrapFormEl.insertBefore(newFormH2, submitBtn);


// Create the <input> element, corresponding <label> element,
// and wrapping <p> element for treasure name input
const newNameP = document.createElement("p");
const newNameLabel = document.createElement("label");
const newNameInput = document.createElement("input");
// Specify the content and attributes of the <label> element
newNameLabel.innerHTML = "Name: ";
newNameLabel.for = "id_form-" + totalFormsValue + "-name";
// Specify the content and attributes of the <input> element
newNameInput.name = "form-" + totalFormsValue + "-name";
newNameInput.id = "id_form-" + totalFormsValue + "-name";
newNameInput.maxlength = 100;
newNameInput.type = "text";
// Add the <label>/<input> elements as children of the wrapping <p> element
newNameP.appendChild(newNameLabel);
newNameP.appendChild(newNameInput);
// Add the new <p> element as a child node of the HTML <form> element, 
// inserting it right before the submit button <input> element
wrapFormEl.insertBefore(newNameP, submitBtn);


// Create the <input> element, corresponding <label> element,
// and wrapping <p> element for treasure "estimated price" input
const newPriceP = document.createElement("p");
const newPriceLabel = document.createElement("label");
const newPriceInput = document.createElement("input");
// Specify the content and attributes of the <label> element
newPriceLabel.innerHTML = "Estimated price: ";
newPriceLabel.for = "id_form-" + totalFormsValue + "-estimated_price";
// Specify the content and attributes of the <input> element
newPriceInput.id = "id_form-" + totalFormsValue + "-estimated_price";
newPriceInput.name = "form-" + totalFormsValue + "-estimated_price";
newPriceInput.type = "number";
// Add the <label>/<input> elements as children of the wrapping <p> element
newPriceP.appendChild(newPriceLabel);
newPriceP.appendChild(newPriceInput);
// Add the new <p> element as a child node of the HTML <form> element, 
// inserting it right before the submit button <input> element
wrapFormEl.insertBefore(newPriceP, submitBtn);

// Create an <hr> element which is to be tacked on directly after the new
// <p> elements, in accordance with our django template
const newHr = document.createElement("hr");
// Add the new <hr> element as a child node of the HTML <form> element, 
// inserting it right before the submit button <input> element
wrapFormEl.insertBefore(newHr, submitBtn);

// Update the total number of forms so that Django knows that there are
// four 'Django forms' to process
totalFormsInput.value++;

const addFormBtn = document.getElementById('add-form-btn');

// define function that is to be triggered when user clicks
// 'add form' button
function addForm() {
    const totalFormsValue = totalFormsInput.value;


    const newFormH2 = document.createElement("h2");
    // Slightly updated 
    newFormH2.innerHTML = "Cool new form no. " + totalFormsValue;
    newFormH2.id = "form-" + totalFormsValue + "-h2";
    wrapFormEl.insertBefore(newFormH2, submitBtn);


    const newNameP = document.createElement("p");
    const newNameLabel = document.createElement("label");
    const newNameInput = document.createElement("input");
    newNameLabel.innerHTML = "Name: ";
    newNameLabel.for = "id_form-" + totalFormsValue + "-name";
    newNameInput.name = "form-" + totalFormsValue + "-name";
    newNameInput.id = "id_form-" + totalFormsValue + "-name";
    newNameInput.maxlength = 100;
    newNameInput.type = "text";
    newNameP.appendChild(newNameLabel);
    newNameP.appendChild(newNameInput);
    wrapFormEl.insertBefore(newNameP, submitBtn);


    const newPriceP = document.createElement("p");
    const newPriceLabel = document.createElement("label");
    const newPriceInput = document.createElement("input");
    newPriceLabel.innerHTML = "Estimated price: ";
    newPriceLabel.for = "id_form-" + totalFormsValue + "-estimated_price";
    newPriceInput.id = "id_form-" + totalFormsValue + "-estimated_price";
    newPriceInput.name = "form-" + totalFormsValue + "-estimated_price";
    newPriceInput.type = "number";
    newPriceP.appendChild(newPriceLabel);
    newPriceP.appendChild(newPriceInput);
    wrapFormEl.insertBefore(newPriceP, submitBtn);

    const newHr = document.createElement("hr");
    wrapFormEl.insertBefore(newHr, submitBtn);

    totalFormsInput.value++;
}

// add event listener which ensures that a new 'django form' is
// added each time the user clicks the 'add form' button
addFormBtn.addEventListener('click', addForm);

// get the number of the most recently added/higehst-numbered 'django form' 
const highestFormNumber = totalFormsInput.value - 1;
// get <h2> element pertaining to 'django form' that is to be removed
const removeH2 = document.getElementById("form-" + highestFormNumber + "-h2");
// get <p> elements of 'django form' that is to be removed
const removeP1 = removeH2.nextElementSibling;
const removeP2 = removeP1.nextElementSibling;
// get <hr> element pertaining to 'django form' that is to be removed
const removeHr = removeP2.nextElementSibling;
// remove the elements
wrapFormEl.removeChild(removeH2);
wrapFormEl.removeChild(removeP1);
wrapFormEl.removeChild(removeP2);
wrapFormEl.removeChild(removeHr);
//decrease form counter
totalFormsInput.value--;

const removeFormBtn = document.getElementById('remove-form-btn');

// get hidden input that counts the number of 'initial value' forms
const initialFormsInput = document.getElementById("id_form-INITIAL_FORMS");

function removeForm() {
    const highestFormNumber = totalFormsInput.value - 1;
    // is there at least one form left to remove?
    if (totalFormsInput.value > 0) {
        console.log("form-" + highestFormNumber + "-h2");
        const removeH2 = document.getElementById("form-" + highestFormNumber + "-h2");
        const removeP1 = removeH2.nextElementSibling;
        const removeP2 = removeP1.nextElementSibling;
        const removeHr = removeP2.nextElementSibling;
        wrapFormEl.removeChild(removeH2);
        wrapFormEl.removeChild(removeP1);
        wrapFormEl.removeChild(removeP2);
        wrapFormEl.removeChild(removeHr);
        totalFormsInput.value--;
    }
}

removeFormBtn.addEventListener('click', removeForm);