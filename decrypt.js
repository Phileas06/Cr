const textEnter = document.getElementById('encrypted-text')
const password = document.getElementById('password')
const decodeButton = document.querySelector('button')

const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ü", "ä", "ö", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " ", "ß"];

textEnter.value = 'Enter your text...'
password.value = 'Enter your password...'

textEnter.addEventListener('focus', () => {
    if (textEnter.value.trim() == 'Enter your text...') {
        textEnter.value = ''
    }
})

textEnter.addEventListener('blur', () => {
    if (textEnter.value.trim() == '') {
        textEnter.value = 'Enter your text...'
    }
})

password.addEventListener('focus', () => {
    if (password.value.trim() == 'Enter your password...') {
        password.value = ''
    }
})

password.addEventListener('blur', () => {
    if (password.value.trim() == '') {
        password.value = 'Enter your password...'
    }
})

decodeButton.addEventListener('click', () => {
    if (textEnter.value != "Enter your text..." && password.value != 'Enter your password...') {
        //calculate value
        let passwordValue = 0
        let newText = ''
        let passwordCharacters = password.value.split('')
        for (let i = 0; i < password.value.length; i++) {
            for (let j = 0; j < characters.length; j++) {
                if (passwordCharacters[i] === characters[j]) {
                    passwordValue += j
                    j = 100
                }
            }
        }

        passwordValue = passwordValue % 41
        console.log(passwordValue)
        let text = textEnter.value.split('')
         for (let i = 0; i < text.length; i++) {
            for (let j = 0; j < characters.length; j++) {
                if (text[i] === characters[j]) {
                    if (j - passwordValue < 0) {
                        newText = newText + characters[j - passwordValue + 40]
                    } else {
                        newText = newText + characters[j - passwordValue]
                    }
                    
                    j = 100
                    textEnter.value = newText
                }
            }
        }
    }
})