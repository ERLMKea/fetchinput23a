

function actionFetchUrlDummy(btn) {
    const url = inpUrl.value;
    console.log(url)
    textArea.textContent = url
}

function fetchAnyUrl(url) {
    console.log("inside fetch url=" + url)
    //return  fetch(url).then(response => response.json());
    return  fetch(url).then(response => response.text());
}

function actionFetchUrlnoAsync(btn) {
    const url = inpUrl.value
    console.log(url)
    const jsonOutput = fetchAnyUrl(url)
    textArea.textContent = jsonOutput
    console.log(jsonOutput)
}

async function actionFetchUrl(btn) {
    const url = inpUrl.value
    console.log(url)
    const jsonOutput = await fetchAnyUrl(url)
    textArea.textContent = jsonOutput
    console.log(jsonOutput)
}

const inpUrl = document.getElementById("inpUrl")
const textArea = document.getElementById("txt")
const pbFetch = document.getElementById("pbFetchUrl")
pbFetch.addEventListener('click', actionFetchUrl)

