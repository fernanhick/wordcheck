console.log('hello world')

const conflictWords = ['error', 'project', 'es']

function onReceiptsSelected() {
    let inputFile = document.querySelector('#receiptFilesInput').files
    const files = inputFile
    if (files.length > 0) {
        const reader = new FileReader()
        reader.onload = (e) => {
            let content = e.target.result
            let textArea = document.querySelector('#file-content')

            var original_string = content

            conflictWords.forEach((word) => {
                let reg = new RegExp(word, 'gi')
                //regex = new RegExp('(\\b' + word + '\\b)', 'gi') // note the parentheses around variable
                original_string = original_string.replace(
                    reg,
                    `<span class="highlight">${word}</span>`,
                    function (e) {
                        word += 1
                        console.log(`${word} TIMES`)
                    }
                )
            })
            console.log(original_string)
            textArea.innerHTML = `${original_string}`
        }
        reader.readAsText(files[0])
    }
}
