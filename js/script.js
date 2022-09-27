const conflictWords = ['error', 'project', 'es']

const countWords = () => {
    word += 1
    console.log(`1`)
}

const wordsList = document.querySelector('.words-list')
const wordsWrapper = document.querySelector('.words-wrapper')



const declareBtnClose = () =>{

    let closeBtn = document.querySelectorAll('.close-btn')
    closeBtn.forEach((btn, index)=>{
        btn.addEventListener('click', ()=>{    conflictWords.splice(index, 1)
            console.log(conflictWords)
        populateWrapper()
        }) 
    })
}

const populateWrapper = ()=>{
    wordsList.innerHTML = ''
    conflictWords.map((e)=>{
        wordsList.innerHTML +=`<div class='word'><p>${e}</p><span class='close-btn'>x</span></div>`
    
        
    })
    declareBtnClose()
    
}


const btnShow = document.querySelector('.btn-display')
btnShow.addEventListener('click', ()=>{
    wordsWrapper.classList.toggle('visible')
    populateWrapper()
})
const btnDrawerClose = document.querySelector('.close-wrapper')
btnDrawerClose.addEventListener('click', ()=>{
    wordsWrapper.classList.remove('visible')
})

function onReceiptsSelected() {
    let inputFile = document.querySelector('#receiptFilesInput').files
    const files = inputFile
    let
    if (files.length > 0) {
        const reader = new FileReader()
        reader.onload = (e) => {
            let content = e.target.result
            let textArea = document.querySelector('#file-content')

            var original_string = content

            conflictWords.forEach((word) => {
                let reg = new RegExp(word, 'gi')
                original_string = original_string.replace(reg, (e) => {

                    return `<span class="highlight">${e}</span>`
                })
            })
            console.log(original_string)
            textArea.innerHTML = `${original_string}`
        }
        reader.readAsText(files[0])
    }
}
