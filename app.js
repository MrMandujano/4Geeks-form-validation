let form = document.querySelector('form');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let errors = [];

    let cardNum = document.querySelector('#cardNum');
    let cvcNum = document.querySelector('#cvcNum');
    let fName = document.querySelector('#fName');
    let lName = document.querySelector('#lName');
    let cTxt = document.querySelector('#cTxt');
    let zipNum = document.querySelector('#zipNum');

    let empty = /^$/;
    let formatNum = /^[0-9]+$/;
    let formatTxt = /^[a-z A-Z]+$/;
//Credit card
    if (empty.test(cardNum.value)) {
        errors.push({ item: 'cardNum', message: 'el campo no puede estar vacio', input: cardNum })
    } else if (!formatNum.test(cardNum.value)) {
        errors.push({ item: 'cardNum', message: 'el campo solo debe contener numeros ', input: cardNum })
    } else {
        cardNum.classList.remove('is-invalid');
    }
//CVC
    if (empty.test(cvcNum.value)) {
        errors.push({ item: 'cvcNum', message: 'el campo no puede estar vacio', input: cvcNum })
    } else if (!formatNum.test(cvcNum.value)) {
        errors.push({ item: 'cvcNum', message: 'el campo solo debe contener numeros ', input: cvcNum })
    } else {
        cvcNum.classList.remove('is-invalid');
    }
//AMOUNT
    if (empty.test(amNum.value)) {
        errors.push({ item: 'amNum', message: 'el campo no puede estar vacio', input: amNum })
    } else if (!formatNum.test(amNum.value)) {
        errors.push({ item: 'amNum', message: 'el campo solo debe contener numeros ', input: amNum })
    } else {
        amNum.classList.remove('is-invalid');
    }
// FIRST NAME 
    if (empty.test(fName.value)) {
        errors.push({ item: 'fName', message: 'el campo no puede estar vacio', input: fName })
    } else if (!formatTxt.test(fName.value)) {
        errors.push({ item: 'fName', message: 'el campo solo debe contener letras', input: fName })
    } else {
        fName.classList.remove('is-invalid');
    }
// LAST NAME
    if (empty.test(lName.value)) {
        errors.push({ item: 'lName', message: 'el campo no puede estar vacio', input: lName })
    } else if (!formatTxt.test(fName.value)) {
        errors.push({ item: 'lName', message: 'el campo solo debe contener letras', input: lName })
    } else {
        lName.classList.remove('is-invalid');
    }
// CITY 
if (empty.test(cTxt.value)) {
    errors.push({ item: 'cTxt', message: 'el campo no puede estar vacio', input: cTxt })
} else if (!formatTxt.test(cTxt.value)) {
    errors.push({ item: 'cTxt', message: 'el campo solo debe contener letras', input: cTxt })
} else {
    lName.classList.remove('is-invalid');
}

//ZIP
if (empty.test(zipNum.value)) {
    errors.push({ item: 'zipNum', message: 'el campo no puede estar vacio', input: zipNum })
} else if (!formatTxt.test(zipNum.value)) {
    errors.push({ item: 'zipNum', message: 'el campo solo debe contener letras', input: zipNum })
} else {
    zipNum.classList.remove('is-invalid');
}


    console.log(errors);
    if (errors.length > 0) {
        errors.forEach(({ item, message, input }) => {
            input.classList.add('is-invalid');
            document.querySelector(`.${item}`).innerHTML = message;
        });
    } else {
        form.submit();
    }

});