const bubbleDOM = document.createElement('div')
const bubbleDOM1 = document.createElement('div')
const bubbleDOM2 = document.createElement('div')
const bubbleDOM3 = document.createElement('div')
const bubbleDOM4 = document.createElement('div')
const bubbleDOM5 = document.createElement('div')
const bubbleDOM6 = document.createElement('div')
const bubbleDOM7 = document.createElement('div')
const bubbleDOM8 = document.createElement('div')
const bubbleDOM9 = document.createElement('div')
bubbleDOM.setAttribute('class', 'selection_bubble')
bubbleDOM1.setAttribute('class', 'selection_bubble')
bubbleDOM2.setAttribute('class', 'selection_bubble')
bubbleDOM3.setAttribute('class', 'selection_bubble')
bubbleDOM4.setAttribute('class', 'selection_bubble')
bubbleDOM5.setAttribute('class', 'selection_bubble')
bubbleDOM6.setAttribute('class', 'selection_bubble')
bubbleDOM7.setAttribute('class', 'selection_bubble')
bubbleDOM8.setAttribute('class', 'selection_bubble')
bubbleDOM9.setAttribute('class', 'selection_bubble')
let i
for (i = 0; i < 9; i++) {
  const api = document.createElement('div')
  api.setAttribute('class', 'apicss')
  bubbleDOM.appendChild(api)
}
bubbleDOM6.style='display:flex;flex-direction:column;justify-content:flex-start;'
document.body.appendChild(bubbleDOM)
document.body.appendChild(bubbleDOM1)
document.body.appendChild(bubbleDOM2)
document.body.appendChild(bubbleDOM3)
document.body.appendChild(bubbleDOM4)
document.body.appendChild(bubbleDOM5)
document.body.appendChild(bubbleDOM6)
document.body.appendChild(bubbleDOM7)
document.body.appendChild(bubbleDOM8)
document.body.appendChild(bubbleDOM9)
const apicss = bubbleDOM.querySelectorAll('.apicss')

const image = document.createElement('img')
image.src = chrome.runtime.getURL('images/svgs/transl.svg')
const image1 = document.createElement('img')
image1.src = chrome.runtime.getURL('images/svgs/dictionary.svg')
const image2 = document.createElement('img')
image2.src = chrome.runtime.getURL('images/svgs/currency.svg')
const image3 = document.createElement('img')
image3.src = chrome.runtime.getURL('images/svgs/imdb.svg')
const image4 = document.createElement('img')
image4.src = chrome.runtime.getURL('images/svgs/stocks.svg')
const image5 = document.createElement('img')
image5.src = chrome.runtime.getURL('images/svgs/addnote.svg')
const image6 = document.createElement('img')
image6.src = chrome.runtime.getURL('images/svgs/rating.svg')
const image7 = document.createElement('img')
image7.src = chrome.runtime.getURL('images/svgs/unitconvert.svg')
const image8 = document.createElement('img')
image8.src = chrome.runtime.getURL('images/svgs/price.svg')
apicss[0].appendChild(image)
apicss[1].appendChild(image1)
apicss[2].appendChild(image2)
apicss[3].appendChild(image3)
apicss[4].appendChild(image4)
apicss[5].appendChild(image5)
apicss[6].appendChild(image6)
apicss[7].appendChild(image7)
apicss[8].appendChild(image8)

document.addEventListener('mouseup', function (e) {
  bubbleDOM.style.visibility = 'hidden'
  bubbleDOM1.style.visibility = 'hidden'
  bubbleDOM2.style.visibility = 'hidden'
  bubbleDOM3.style.visibility = 'hidden'
  bubbleDOM4.style.visibility = 'hidden'
  bubbleDOM5.style.visibility = 'hidden'
  bubbleDOM6.style.visibility = 'hidden'
  bubbleDOM7.style.visibility = 'hidden'
  bubbleDOM8.style.visibility = 'hidden'
  let selection = window.getSelection().toString()
  apicss[0].addEventListener('click', (e) => {
    bubbleDOM1.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
    if(selection!=""){
    translate(selection)}
    selection = ""
  })
  apicss[1].addEventListener('click', (e) => {
    bubbleDOM2.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
    // dictionary(selection)
    if(selection!=""){
    dictionarytxt(selection)}
    selection = ""
  })
  apicss[2].addEventListener('click', (e) => {
    bubbleDOM3.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
    if(selection!=""){
    currencyapi(selection)}
    selection = ""
  })
  apicss[3].addEventListener('click', (e) => {
    bubbleDOM4.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
    if(selection!=""){
    imdb(selection)}
    selection = ""
  })
  apicss[4].addEventListener('click', (e) => {
    bubbleDOM5.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
    if(selection!=""){
    stock(selection)}
    selection = ""
  })
  apicss[5].addEventListener('click', (e) => {
    bubbleDOM6.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
    if(selection!=""){
    const addnote = document.createElement('div')
    addnote.innerHTML="<ol><li>"+selection+"</li></ol>"
    bubbleDOM6.appendChild(addnote)}
    selection = ""
  })
  // selection.replace(' ','%2C%20')
  // const data = 'q=Hello%2C%20world!&source=en&target=es'
  if (selection.length > 0) {
    renderBubble(e.clientX, e.clientY, selection)
  }
}, false)

/* document.addEventListener('mousedown', function (e) {
  bubbleDOM.style.visibility = 'hidden'
}, false) */

function renderBubble (mouseX, mouseY, selection) {
  /* if (bubbleDOM.innerHTML !== '') {
    bubbleDOM.innerHTML = bubbleDOM.innerHTML + '<br>' + selection
  } else {
    bubbleDOM.innerHTML = selection
  } */
  bubbleDOM.style.top = mouseY + 'px'
  bubbleDOM.style.left = mouseX + 'px'
  bubbleDOM1.style.top = mouseY + 'px'
  bubbleDOM1.style.left = mouseX + 'px'
  bubbleDOM2.style.top = mouseY + 'px'
  bubbleDOM2.style.left = mouseX + 'px'
  bubbleDOM3.style.top = mouseY + 'px'
  bubbleDOM3.style.left = mouseX + 'px'
  bubbleDOM4.style.top = mouseY + 'px'
  bubbleDOM4.style.left = mouseX + 'px'
  bubbleDOM5.style.top = mouseY + 'px'
  bubbleDOM5.style.left = mouseX + 'px'
  bubbleDOM6.style.top = mouseY + 'px'
  bubbleDOM6.style.left = mouseX + 'px'
  bubbleDOM7.style.top = mouseY + 'px'
  bubbleDOM7.style.left = mouseX + 'px'
  bubbleDOM8.style.top = mouseY + 'px'
  bubbleDOM8.style.left = mouseX + 'px'
  bubbleDOM9.style.top = mouseY + 'px'
  bubbleDOM9.style.left = mouseX + 'px'
  bubbleDOM.style.visibility = 'visible'
}

// structure of translate
function translateui (sel) {
  bubbleDOM1.innerHTML = "<div class='translatebtn'></div>"
  document.querySelector('.translatebtn').addEventListener('click', (e) => {
    bubbleDOM1.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
  })
}

// apitranslate
function translate (selection1) {
  bubbleDOM1.style.visibility = 'visible'
  bubbleDOM.style.visibility = 'hidden'
  bubbleDOM1.innerHTML = ''
  const data1 = 'q=' + selection1
  const xhr1 = new XMLHttpRequest()
  xhr1.responseType = 'json'
  xhr1.withCredentials = true
  let ans1 = ''

  xhr1.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      console.log('detect language')
      ans1 = this.response.data.detections[0][0].language
      console.log(ans1)
      console.log('detect language')
    }
  })

  xhr1.open('POST', 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect')
  xhr1.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
  xhr1.setRequestHeader('x-rapidapi-key', 'd26246e695msh215478d2cada68dp1668cfjsn5e5985bd6b76')
  xhr1.setRequestHeader('x-rapidapi-host', 'google-translate1.p.rapidapi.com')

  xhr1.send(data1)

  const data = 'q=' + selection1 + '&source=' + ans1 + '&target=en'

  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.withCredentials = true

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      if (selection1.length > 0) {
        console.log('translate language')
        bubbleDOM1.innerHTML = this.response.data.translations[0].translatedText
        console.log('translate language')
      }
    }
  })

  xhr.open('POST', 'https://google-translate1.p.rapidapi.com/language/translate/v2')
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
  xhr.setRequestHeader('x-rapidapi-key', 'd26246e695msh215478d2cada68dp1668cfjsn5e5985bd6b76')
  xhr.setRequestHeader('x-rapidapi-host', 'google-translate1.p.rapidapi.com')

  xhr.send(data)
}

// structure of dictionary
function dictionary (sel1) {
  bubbleDOM2.innerHTML = "<div class='translatebtn1'></div>"
  document.querySelector('.translatebtn1').addEventListener('click', (e) => {
    bubbleDOM2.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
  })
}

// apidictionary
function dictionarytxt (selection2) {
  bubbleDOM2.style.visibility = 'visible'
  bubbleDOM.style.visibility = 'hidden'
  bubbleDOM2.innerHTML = ''
  const data = null

  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.withCredentials = true

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      console.log(this.response.list[0].definition)
      bubbleDOM2.innerHTML = this.response.list[0].definition
    }
  })
  const query = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=' + selection2
  xhr.open('GET', query)
  xhr.setRequestHeader('x-rapidapi-key', 'e64af7e547mshc9f85bc651c024bp1bdffbjsn0ced214f02ca')
  xhr.setRequestHeader('x-rapidapi-host', 'mashape-community-urban-dictionary.p.rapidapi.com')

  xhr.send(data)
}

// currencyapi
function currencyapi (selec) {
  const xhttp = new XMLHttpRequest()
  xhttp.responseType = 'json'
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      bubbleDOM3.innerHTML = parseFloat(xhttp.response.USD_INR) * parseFloat(selec)
      // console.log(parseInt(xhttp.response.USD_INR)*parseInt(selec))
    }
  }
  xhttp.open('GET', 'https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=91588b10c2e928df38f9', true)
  xhttp.send()
}

function imdb (selec5) {
  const data = null

  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'


  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      console.log(this.response.rating)
      bubbleDOM4.innerHTML = this.response.rating
    }
  })

  xhr.open('GET', 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/'+selec5)
  xhr.setRequestHeader('x-rapidapi-key', 'e64af7e547mshc9f85bc651c024bp1bdffbjsn0ced214f02ca')
  xhr.setRequestHeader('x-rapidapi-host', 'imdb-internet-movie-database-unofficial.p.rapidapi.com')

  xhr.send(data)
}


function stock (selec5) {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json'
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      const outstock=this.response.bestMatches[0]["1. symbol"];
      console.log(outstock);
      const data12 = null;

      const xhr12 = new XMLHttpRequest();
      xhr12.responseType = 'json'

      xhr12.addEventListener("readystatechange", function () {
	    if (this.readyState === this.DONE) {
        const stockoutans = 72*parseFloat(this.response["Global Quote"]["05. price"])
		    console.log(stockoutans);
        bubbleDOM5.innerHTML = stockoutans
	    }
      });

      xhr12.open("GET", "https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol="+outstock+"&datatype=json");
      xhr12.setRequestHeader("x-rapidapi-key", "53f7801bdamsha54ea83970e4847p14683ejsn2fae6caf5675");
      xhr12.setRequestHeader("x-rapidapi-host", "alpha-vantage.p.rapidapi.com");

      xhr12.send(data12);

    }
  });
  
  xhr.open("GET", "https://alpha-vantage.p.rapidapi.com/query?keywords="+selec5+"&function=SYMBOL_SEARCH&datatype=json");
  xhr.setRequestHeader("x-rapidapi-key", "53f7801bdamsha54ea83970e4847p14683ejsn2fae6caf5675");
  xhr.setRequestHeader("x-rapidapi-host", "alpha-vantage.p.rapidapi.com");
  
  xhr.send(data);
}