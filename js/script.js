console.log('hello world')

function onReceiptsSelected() {
    let inputFile = document.querySelector('#receiptFilesInput').files
    const files = inputFile
    if (files.length > 0) {
        const reader = new FileReader()
        reader.onload = (e) => {
            console.log(e.target.result)
        }
        reader.readAsText(files[0])
    }
}
