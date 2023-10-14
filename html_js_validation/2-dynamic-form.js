function generateInputFields(numFields) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.replaceChildren();

    for (let i = 1; i <= numFields; ++i) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'field' + i;
        input.placeholder = 'Field ' + i;
        input.required = true;
        inputContainer.appendChild(input);
    }
}

function validateForm(event) {
    const inputFields = document.querySelectorAll('input[type="text"]');
    let isEmpty = false;

    for (const input of inputFields) {
        if (input.value.trim() === '') {
            isEmpty = true;
            break;
        }
    }

    if (isEmpty) {
        alert('Please fill in all fields');
        event.preventDefault();
    }
}

const numFieldsDropdown = document.getElementById('numFields');
numFieldsDropdown.addEventListener('change', function () {
    const selectedValue = parseInt(numFieldsDropdown.value);
    generateInputFields(selectedValue);
});

const dynamicForm = document.getElementById('dynamicForm');
dynamicForm.addEventListener('submit', validateForm);

generateInputFields(parseInt(numFieldsDropdown.value));