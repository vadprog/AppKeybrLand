const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random' // запрос рандомных фраз
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')

// создать функцию по работе с фразами
function getRandomQuote () {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

// вывести асинхронно фразы
// async function getNextQuote() {
//     const qoute = await getRandomQuote()
//     console.log(quote)
// }
// getNextQuote()

// разделить фразы на буквы
async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayElement.innerHTML = ''
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    });
    quoteInputElement.value = null
}

renderNewQuote()