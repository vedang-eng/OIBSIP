let result = document.querySelector(".output");

let expression = "";

const press = (e) => {
    expression += e;
    result.innerHTML = expression;
};

const equal = (e) => {
    result.innerHTML = eval(expression);
    expression = "";
};

const remove = (e) => {
    expression = "";
    result.innerHTML = expression;
};
