let start = document.getElementById('setAlarm')

let options = { hour: 'numeric', minute: 'numeric', hour12: true }
start.addEventListener('click', () => {
    console.log("clicked")
    let time = document.getElementById('input-time').value
    var dateObj = new Date('2023-03-18T' + time + ':00');
    time = dateObj.toLocaleTimeString([],options)

        let timer = setInterval(alarm, 1000)
        function alarm() {
            let currTime = new Date().toLocaleTimeString([], options)
            console.log(currTime)
            let audio = new Audio('alarm.wav')
            if (time == currTime)
            { 
                audio.play();
            }
            let stop = document.getElementById('stopAlarm')
            stop.addEventListener( 'click', ()=>{
                audio.pause();
                clearInterval(timer)
            })  
        }
});

// alert("Click worked")
    // var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
    // audio.play();

// function play() {
//     var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
//     audio.play();
//   }