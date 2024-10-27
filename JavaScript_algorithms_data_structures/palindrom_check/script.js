document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value.trim();
    const resultElement = document.getElementById('result');

    // Check if the input is empty
    if (inputText === "") {
        alert("Please input a value");
        return;
    }

    // Normalize the input: Remove non-alphanumeric characters and convert to lowercase
    const normalizedText = inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isPalindrome = normalizedText === normalizedText.split('').reverse().join('');

    // Determine the result based on the palindrome check
    if (isPalindrome) {
        resultElement.innerText = `${inputText} is a palindrome`;
    } else {
        resultElement.innerText = `${inputText} is not a palindrome`;
    }
});
