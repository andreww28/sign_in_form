
const form = document.querySelector("#form")
const submit_btn = document.querySelector("#submit-btn");
const fname_field = document.querySelector("#fname");
const lname_field = document.querySelector("#lname");
const pnum_field = document.querySelector("#pnumber");
const email_field = document.querySelector("#email");
const pass_field = document.querySelector("#pass");
const confirm_pass_field = document.querySelector("#confirm_pass");




const password_not_match = () => {
    if(confirm_pass_field.validity.valueMissing) {
        document.querySelector(`#confirm_pass + span`).style.display = "block";
        document.querySelector(`#confirm_pass + span`).textContent = `*Password Confirmation is required.`
    }
 
    if(pass_field.value !== confirm_pass_field.value) {
        confirm_pass_field.style.border = "3px solid rgb(126, 43, 43)";
        document.querySelector(`#confirm_pass + span`).style.display = "block";
        document.querySelector(`#confirm_pass + span`).textContent = `Password doesn't match.`
    }else {
        document.querySelector(`#confirm_pass + span`).style.display = "none";
        confirm_pass_field.style.border = "1px solid #c7c7c7";
    }
}

fname_field.addEventListener("input", (e) => validate_on_input(e, "#fname", "First Name"));
lname_field.addEventListener("input", (e) => validate_on_input(e, "#lname", "Last Name"));
pnum_field.addEventListener("input", (e) => validate_on_input(e, "#pnumber", "Phone number"));
email_field.addEventListener("input", (e) => validate_on_input(e, "#email", "Email Address"));
pass_field.addEventListener("input", (e) => validate_on_input(e, "#pass", "Password"));
confirm_pass_field.addEventListener("input", password_not_match);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validate_on_submit(fname_field, "#fname", "First Name");
    validate_on_submit(lname_field, "#lname", "Last Name");
    validate_on_submit(pnum_field, "#pnumber", "Phone number");
    validate_on_submit(email_field, "#email", "Email Address");
    validate_on_submit(pass_field, "#pass", "Password");
    password_not_match();``
});

const validate_on_submit = (input, input_id, input_name) => {
    if(input.validity.valid) {
        document.querySelector(`${input_id} + span`).style.display = "none";
        input.style.border = "1px solid #c7c7c7";
    }else {
        show_error(input, input_id, input_name);
    }
}

const validate_on_input = (e, input_id, input_name) => {
    if(e.target.validity.valid) {
        document.querySelector(`${input_id} + span`).style.display = "none";
        e.target.style.border = "1px solid #c7c7c7";
    }else {
        show_error(e.target, input_id, input_name);
    }
}


const show_error = (input, input_id, input_name) => {
    tooShort_error(input, input_id, input_name);
    value_missing_error(input, input_id, input_name);
    type_mismatch_error(input, input_id, input_name);
    pattern_mismatch_error(input, input_id, input_name);
    input.style.border = "3px solid rgb(126, 43, 43)";
}

const value_missing_error = (input, input_id, input_name) => {
    if(input.validity.valueMissing) {
        document.querySelector(`${input_id} + span`).style.display = "block";
        document.querySelector(`${input_id} + span`).textContent = `*${input_name} is required.`
    }
} 

const type_mismatch_error = (input, input_id, input_name) => {
    if(input.validity.typeMismatch) {
        document.querySelector(`${input_id} + span`).style.display = "block";
        document.querySelector(`${input_id} + span`).textContent = `Invalid format for ${input_name}.`
    }
} 

const pattern_mismatch_error = (input, input_id, input_name) => {
    if(input.validity.patternMismatch) {
        document.querySelector(`${input_id} + span`).style.display = "block";
        document.querySelector(`${input_id} + span`).textContent = `Invalid format for ${input_name}.`
    }
} 

const tooShort_error = (input, input_id, input_name) => {
    if(input.validity.tooShort) {
        document.querySelector(`${input_id} + span`).style.display = "block";
        document.querySelector(`${input_id} + span`).textContent = `${input_name} is too short.`
    }
} 




