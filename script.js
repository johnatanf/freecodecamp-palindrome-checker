const checkBtn = document.getElementById('check-btn')
checkBtn.addEventListener('click', clickCheckButton)

function cleanString(str) {
    return str
        .replace(/[^a-z0-9]/gi, '')
        .toLowerCase();
}

function reverseString(str) {
    return str
        .split("")
        .reverse()
        .join("")
}

function checkIfPalindrome(str) {
    const cleanStr = cleanString(str)
    const reverseStr = reverseString(cleanStr)

    if(cleanStr === reverseStr) {
        return true;
    } else {
        return false;
    }
}

function clickCheckButton() {
    const inputField = document.getElementById('text-input')
    const result = document.getElementById('result')
    const inputFieldValue = inputField.value.toString()
    
    if(inputFieldValue === "") {
        alert("Please input a value")
        return
    } else {
        if(checkIfPalindrome(inputFieldValue) === true) {
            result.innerHTML = `${inputFieldValue} is a palindrome`
        } else {
            result.innerHTML = `${inputFieldValue} is not a palindrome`
        }
    }
}