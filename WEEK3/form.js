function validate(){
    const phoneNumber = document.getElementById('phone-number').value;
    const phoneRGEX = /^\+?[0-9](?:[- ]?[0-9]){9,11}$/;
    const phoneResult = phoneRGEX.test(phoneNumber);

    if(!phoneResult) {
        alert('Please enter a valid phone number');
        return false;
    }
    return true;
}

function validateEmail(){
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailResult = emailRegex.test(email);

    if(!emailResult) {
        alert('Please enter a valid email address');
        return false;
    }
    return true;
}

function validateName(){
    const name = document.getElementById('name').value;
    const nameRegex = /^[A-Za-z]+$/;
    const nameResult = nameRegex.test(name.trim());

    if(!nameResult) {
        alert('Please enter a valid name');
        return false;
    }
    return true;
}

const addInfo = (e) => {
    e.preventDefault();

    let info = {
        id: Date.now(),
        name: document.getElementById('name').value,
        phone: document.getElementById('phone-number').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        otherInfo: document.getElementById('otherInfo').value,
        animal: document.querySelectorAll("input[type= 'checkbox']:checked"),
    };

    /* Pushing the value of the checked checkboxes into the selectedAnimals array. */
    let selectedAnimals = [];
    document.querySelectorAll("input[type= 'checkbox']:checked");
    info.animal.forEach((checkbox) => {
        selectedAnimals.push(checkbox.value);
    });
    console.log(selectedAnimals);

    /* Pushing the info into the infos array and resetting the form. */
    let infos = [];
    infos.push(info);
    document.forms[0].reset();
    console.log(infos);

    let myInfo = JSON.stringify(info);
    localStorage.setItem("Added", myInfo);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
       if(validate(), validateEmail(), validateName()){
           document.getElementById('btn').addEventListener('click', addInfo);
           alert('Information successfully uploaded');
       }
    }, true);
})
//
// // localStorage.removeItem("Added");
