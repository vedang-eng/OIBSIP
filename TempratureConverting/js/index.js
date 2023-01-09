let inputDegree = document.getElementById('inputDegree');
let inputState = document.getElementById('inputState');
let outputField = document.getElementById('output');
let notificatio = document.getElementById('notificatio');

let button = document.getElementById('convert');

button.addEventListener('click', (e) => {
    e.preventDefault();
    let input = inputDegree.value;
    let choice = inputState.value;
    console.log("input:" + input+ typeof(input));
    if (choice != "Choose..." && input !="") {
        let numberInput = parseFloat(input);
        let result;
        if (choice == "Fahrenheit") {

            result = (numberInput * 9.0 / 5.0) + 32;
            console.log(result);
            outputField.innerHTML = result;
        }
        else {
            result = numberInput + 273.15;
            
            outputField.innerHTML = result;
        }
        notificatio.innerHTML += `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Hola user!</strong> The Result Is <strong>${result}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`

    } else if (input == "") {
        notificatio.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Hola user!</strong> You Should Enter Some Input In Degree
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    }
    else {
        notificatio.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Hola user!</strong> You Should Choose The Type Of Conversion
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    }

});