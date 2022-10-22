import { wordslist } from './data.js'

const conflictWords = wordslist
let resultWords = new Set()

const wordsList = document.querySelector('.words-list')
const wordsWrapper = document.querySelector('.words-wrapper')

/* ******************** Close Button For words list ********************* */
const declareBtnClose = () => {
    let closeBtn = document.querySelectorAll('.close-btn')
    closeBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            conflictWords.splice(index, 1)
            populateWrapper()
        })
    })
}
/* *************************** Words Population in List****************************** */
const populateWrapper = () => {
    wordsList.innerHTML = ''
    conflictWords.map((e) => {
        wordsList.innerHTML += `<div class='word'><p>${e.word}</p><span class='close-btn'>x</span></div>`
    })
    declareBtnClose()
}
/* ****************************** Words List Button Display********************************** */
const btnShow = document.querySelector('.btn-display')
btnShow.addEventListener('click', () => {
    wordsWrapper.classList.toggle('visible')
    populateWrapper()
})
/* *******************************Close Button List Drawer ******************************* */
const btnDrawerClose = document.querySelector('.close-wrapper')
btnDrawerClose.addEventListener('click', () => {
    wordsWrapper.classList.remove('visible')
})
/* *********************Open Files And Check Words************************ */
const checkWords = (files) => {
    if (files.length > 0) {
        const reader = new FileReader()
        reader.onload = (e) => {
            let content = e.target.result
            let textArea = document.querySelector('#file-content')

            var original_string = content
            conflictWords.forEach((word) => {
                let reg = new RegExp(word.word, 'gi')
                original_string = original_string.replace(reg, (e) => {
                    let word = e.toLowerCase()
                    resultWords.add(word)
                    return `<span class="highlight" id='${word}'>${e}</span>`
                })
            })
            textArea.innerHTML = `${original_string}`
            popuLateAside()
        }
        reader.readAsText(files[0])
    }
}

/* ************************** Search Functionality  ******************************* */
//TODO
let indexMap = {}

function nextWord(arg) {
    const words = document.querySelectorAll(`#${arg}`)
    const waside = document.querySelector(`#${arg}-aside`)

    words[indexMap[arg]].scrollIntoView()

    const newDiv = document.createElement('span')
    newDiv.innerHTML = ``
    // and give it some content
    const newContent = document.createTextNode(`${indexMap[arg] + 1}`)

    // add the text node to the newly created div
    newDiv.appendChild(newContent)

    waside.insertAdjacentElement('afterend', newDiv)

    indexMap[arg] += 1
    if (indexMap[arg] >= words.length) {
        indexMap[arg] = 0
    }
    console.log(indexMap[arg])
}

function setSearchCrarousel() {
    const descWords = document.querySelectorAll('.word-aside')
    descWords.forEach((e) => {
        indexMap[e.innerText] = 0
        e.addEventListener('click', () => populateDescription(e.innerText))
        e.addEventListener('click', () => nextWord(e.innerText))
    })
}

/* ***********************Populate Aside for Words when detected in file ************************* */
function popuLateAside() {
    const resultsArea = document.querySelector('.files-result')
    resultsArea.innerHTML = ``

    resultWords.forEach((value) => {
        resultsArea.innerHTML += `<div class='word-aside' id='${value}-aside'>${value}</div>`
        //resultsArea.innerHTML += `<a href='#${value}'><div class='word-aside'>${value}</div></a>`
    })

    setSearchCrarousel()
}
/* *************************Description For Words onClick **************************** */
function populateDescription(arg) {
    const setDescription = document.querySelector('.description-text')
    setDescription.innerHTML = ''
    conflictWords.forEach((e) => {
        let word = e.word.toLowerCase()
        let description = e.description
        let solution = e.solution
        if (word == arg.toLowerCase()) {
            setDescription.innerHTML = `<p>Word: ${e.word}</p><p>Description: ${description}</p><p> Solution: ${solution}</p>`
        }
    })
}
/* ********************** Check File Button*************************** */
const checkFile = document.querySelector('#check-file')
checkFile.addEventListener('click', onReceiptsSelected)

function onReceiptsSelected() {
    let inputFile = document.querySelector('#receiptFilesInput').files
    const files = inputFile
    checkWords(files)
}

const uploadFile = document.querySelector('#receiptFilesInput')
uploadFile.addEventListener('change', onReceiptsSelected)

/****************************************  Input on press enter *****************************************/

const inputWord = document.querySelector('.words-input')
const inputDescription = document.querySelector('.description-input')
const inputSolution = document.querySelector('.solution-input')

const setWord = (e) => {
    if (e.key == 'Enter') {
        e.preventDefault()
        let inputVal = {
            word: inputWord.value,
            description: inputDescription.value,
            solution: inputSolution.value,
        }
        conflictWords.push(inputVal)
        populateWrapper()
        inputWord.value = ''
        inputDescription.value = ''
        inputSolution.value = ''
    }
}

inputWord.addEventListener('keypress', setWord)
inputDescription.addEventListener('keypress', setWord)
inputSolution.addEventListener('keypress', setWord)

/* ****************************************************************************************** */
