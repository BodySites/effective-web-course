const min = document.querySelector('.time-min')
const sec = document.querySelector('.time-sec')
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')

let time, interval, stateTimer

const audio = new Audio('./media/zvuk-mehanicheskogo-zavodnogo-taymera-39647.mp3')

window.addEventListener('load', () => {
   stateTimer = localStorage.getItem('state') ?? 'inactive'
   time = localStorage.getItem('time') ?? 0
   if (stateTimer !== 'inactive') startTimer()
})

document.addEventListener('click', (event) => {
   if (event.target.classList.contains('time-btn')) {
      if (stateTimer === 'inactive') {
         time = parseInt(event.target.dataset.time)
         setTime(time)
      }
   } else if (event.target.classList.contains('start')) {
      if (stateTimer === 'inactive') {
         if (min.value === '') min.value = 0
         if (sec.value === '') sec.value = 0
         if (validTime(min.value, sec.value)) {
            time = parseInt(min.value) * 60 + parseInt(sec.value)
            stateTimer = 'active'
            startTimer()
         }
         else return
      } else if (stateTimer === 'stop') {
         stateTimer = 'active'
         startTimer()
      }
   } else if (event.target.classList.contains('stop')) {
      if (stateTimer === 'active') {
         stateTimer = 'stop'
         clearInterval(interval)
      }
   } else if (event.target.classList.contains('reset')) {
      resetTimer()
   }
})

function startTimer() {
   setTime(time)
   min.disabled = sec.disabled = true
   if (stateTimer === 'reset') finishTimer()
   else if (stateTimer === 'stop') return
   else {
      interval = setInterval(decreaseTime, 1000)
   }
}

function validTime(min, sec) {
   if (parseInt(min) === 0 && parseInt(sec) === 0) return false
   else return Boolean(/^[0-9]+$/.exec(min) && /^[0-9]+$/.exec(sec))
}

function setTime(value) {
   min.value = `${parseInt(value / 60)}`
   sec.value = `${value % 60}`
   if (value % 60 < 10) sec.value = `0${value % 60}`
}

function decreaseTime() {
   if (time === 0) {
      finishTimer()
   } else {
      setTime(--time)
   }
}

function finishTimer() {
   clearInterval(interval)
   document.body.style.backgroundColor = 'red'
   audio.play()
   stateTimer = 'reset'
}

function resetTimer() {
   stateTimer = 'inactive'
   time = 0
   clearInterval(interval)
   document.body.style.backgroundColor = ''
   audio.pause()
   audio.currentTime = 0
   min.disabled = sec.disabled = false
   min.value = sec.value = ''
}

window.addEventListener('unload', () => {
   localStorage.setItem('state', stateTimer)
   localStorage.setItem('time', time)
})