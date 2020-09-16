$messageboard = document.getElementById('messageboard')
const messageToType = 'Существует два вида языков программирования: одни – все ругают, другими не пользуются.'
let startIndex = 1;

function typewriter(text, dom) {

    $messageboard.innerHTML = text.slice(0, startIndex) + '<span id="blink-caret"></span>'
    startIndex++

    if (startIndex > text.length)
        setTimeout(()=>{startIndex = 0},2000)

}


setInterval( typewriter, Math.floor(Math.random() * 100) + 50, messageToType,$messageboard) // 50 - 150 ms
