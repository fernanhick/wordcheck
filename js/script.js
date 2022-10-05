import { words } from './data.js'
import { wordlist } from './data.js'
//const conflictWords = ['error', 'project', 'es']
const conflictWords = wordlist
let resultWords = new Set()

const wordsList = document.querySelector('.words-list')
const wordsWrapper = document.querySelector('.words-wrapper')

const declareBtnClose = () => {
    let closeBtn = document.querySelectorAll('.close-btn')
    closeBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            conflictWords.splice(index, 1)
            populateWrapper()
        })
    })
}

const populateWrapper = () => {
    wordsList.innerHTML = ''
    conflictWords.map((e) => {
        wordsList.innerHTML += `<div class='word'><p>${e.word}</p><span class='close-btn'>x</span></div>`
    })
    declareBtnClose()
}

const btnShow = document.querySelector('.btn-display')
btnShow.addEventListener('click', () => {
    wordsWrapper.classList.toggle('visible')
    populateWrapper()
})
const btnDrawerClose = document.querySelector('.close-wrapper')
btnDrawerClose.addEventListener('click', () => {
    wordsWrapper.classList.remove('visible')
})

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
                    resultWords.add(e)
                    return `<span class="highlight" id='${e}'>${e}</span>`
                })
            })
            console.log(original_string)
            textArea.innerHTML = `${original_string}`
            popuLateAside()
        }
        reader.readAsText(files[0])
    }
}

function popuLateAside() {
    const resultsArea = document.querySelector('.files-result')
    resultsArea.innerHTML = ``

    resultWords.forEach((value) => {
        resultsArea.innerHTML += `<a href='#${value}'><div class='word-aside'>${value}</div></a>`
    })
    const descWords = document.querySelectorAll('.word-aside')
    descWords.forEach((e) => {
        e.addEventListener('click', () => populateDescription(e.innerText))
    })
}
function populateDescription(arg) {
    const setDescription = document.querySelector('.description-text')
    setDescription.innerHTML = ''
    conflictWords.forEach((e) => {
        let word = e.word.toLowerCase()
        let description = e.description
        if (word == arg.toLowerCase()) {
            setDescription.innerHTML = `${e.word}: ${description}`
        }
    })
}

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

const inputElement = document.querySelector('.words-input')

const setWord = (e) => {
    if (e.key == 'Enter') {
        e.preventDefault()

        let inputVal = inputElement.value
        conflictWords.push(inputVal)
        populateWrapper()
        inputElement.value = ''
    }
}

inputElement.addEventListener('keypress', setWord)
