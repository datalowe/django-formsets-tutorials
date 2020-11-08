// This is Django"s automatically generated HTML for one treasure input,
// which we base our form generation on.
// <h2>Form number 2</h2>
// <p><label for="id_form-2-name">Name:</label> <input type="text" name="form-2-name" maxlength="100" id="id_form-2-name"></p>
// <p><label for="id_form-2-estimated_price">Estimated price:</label> <input type="number" name="form-2-estimated_price" id="id_form-2-estimated_price"></p>
// <hr>

// Grab the form element (which, confusingly, wraps around the p elements
// which each constitute a representation of a single "form" as seen
// from Django"s perspective)
const wrapFormEl = document.getElementById("treasure-form");


// Grab the submit button element
const submitBtn = document.getElementById("submit-button");


// Grab the total number of forms already shown to the user
// (which is also the number that our new form should have in its id/name,
// since Django uses 0-indexing for numbering the forms)
const totalFormsInput = document.getElementsByName("form-TOTAL_FORMS")[0];
const totalFormsValue = totalFormsInput.value;


// Create the header for the new form/set of inputs
const newFormH2 = document.createElement("h2");
newFormH2.innerHTML = `
    Form number ${totalFormsValue}
`;


// Create the inputs, with corresponding label elements,
// and wrapping p element for treasure name input
const newNameP = document.createElement("p");
const newNameLabel = document.createElement("label");
const newNameInput = document.createElement("input");
const newNameInputId = `id_form-${totalFormsValue}-name`;
// Specify the content and attributes of the label element
newNameLabel.innerHTML = "Name:";
newNameLabel.for = newNameInputId;
// Specify the content and attributes of the input element
newNameInput.id = newNameInputId;
newNameInput.name = `form-${totalFormsValue}-name`;
newNameInput.maxlength = 100;
// Add the label/input elements as children of the wrapping p element
newNameP.appendChild(newNameLabel);
newNameP.appendChild(newNameInput);


// Create the inputs, with corresponding label elements, and
// wrapping p element for treasure "estimated price" input
const newPriceP = document.createElement("p");
const newPriceLabel = document.createElement("label");
const newPriceInput = document.createElement("input");
const newPriceInputId = `id_form-${totalFormsValue}-estimated_price`;
// Specify the content and attributes of the label element
newPriceLabel.innerHTML = "Estimated price:";
newPriceLabel.for = newPriceInputId;
// Specify the content and attributes of the input element
newPriceInput.id = newPriceInputId;
newPriceInput.name = `form-${totalFormsValue}-estimated_price`;
newPriceInput.maxlength = 100;
// Add the label/input elements as children of the wrapping p element
newPriceP.appendChild(newPriceLabel);
newPriceP.appendChild(newPriceInput);


// Create a hr element which is to be tacked on directly after the new
// p elements, in keeping with Django"s automatically generated forms
const newHr = document.createElement("hr");


// Add the new h2, 'form' p elements, and the hr element to the HTML
// form element, inserting each one right before the submit button
wrapFormEl.insertBefore(newFormH2, submitBtn);
wrapFormEl.insertBefore(newNameP, submitBtn);
wrapFormEl.insertBefore(newPriceP, submitBtn);
wrapFormEl.insertBefore(newHr, submitBtn);
