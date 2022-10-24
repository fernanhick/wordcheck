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
/* *****************color****Open Files And Check Words************************ */
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

    words[indexMap[arg]].scrollIntoView({ behavior: 'smooth' })
    words[indexMap[arg]].classList.toggle('searched')

    if (words[indexMap[arg] - 1] !== undefined) {
        words[indexMap[arg] - 1].classList.toggle('searched')
    }

    waside.innerHTML = `${indexMap[arg] + 1}/`

    indexMap[arg] += 1
    if (indexMap[arg] >= words.length) {
        indexMap[arg] = 0
    }
    console.log(indexMap[arg])
}
function prevWord(arg) {
    const words = document.querySelectorAll(`#${arg}`)
    const waside = document.querySelector(`#${arg}-aside`)
    words.forEach((e) => {
        e.classList.toggle('searched')
    })
    words[indexMap[arg]].scrollIntoView({ behavior: 'smooth' })
    words[indexMap[arg]].classList.toggle('searched')

    if (words[indexMap[arg] + 1] !== undefined) {
        words[indexMap[arg] + 1].classList.toggle('searched')
    }

    indexMap[arg] -= 1
    waside.innerHTML = `${indexMap[arg] + 1}/`
    if (indexMap[arg] <= 0) {
        indexMap[arg] = words.length - 1
    }
    console.log(indexMap[arg])
}

function setSearchCrarousel() {
    const descWords = document.querySelectorAll('.word-aside-wrapper')
    descWords.forEach((e) => {
        let word = e.dataset.name
        indexMap[word] = 0
        e.addEventListener('click', () => populateDescription(word))
        console.log(e.childNodes[1].childNodes[0])
        e.childNodes[1].childNodes[0].addEventListener('click', () =>
            nextWord(word)
        )
        e.childNodes[1].childNodes[1].addEventListener('click', () =>
            prevWord(word)
        )
    })
    /*   const descWordsDown = document.querySelectorAll('.arrow-down')
    descWordsDown.forEach((e) => {
        console.log(e.dataset.name)
        let value = '' + e.dataset.name
        e.addEventListener('click', () => nextWord(value))
    }) */
}

/* ***********************Populate Aside for Words when detected in file ************************* */
function popuLateAside() {
    const resultsArea = document.querySelector('.files-result')
    resultsArea.innerHTML = ``

    resultWords.forEach((value) => {
        const words = document.querySelectorAll(`#${value}`)

        resultsArea.innerHTML += `<div class='word-aside-wrapper' data-name='${value}' ><div class='word-aside'>${value}</div><div class='search-controller'><span class='arrow-down' >down</span><span class='arrow-up'>up</span></div><div id='counter-wrapper'><span id='${value}-aside'></span><span id='${value}-total'>${words.length}</span></div></div>`
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
