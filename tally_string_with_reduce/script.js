const timeNotes = document.querySelectorAll("[data-time]")
const newArr = [...timeNotes]

const seconds = newArr
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(":").map(parseFloat)
    return (mins * 60) + secs
  })
  .reduce((total, vidSeconds) => {
    return total + vidSeconds
  })

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600)
secondsLeft = secondsLeft % 3600
const mins = Math.floor(secondsLeft / 60)
secondsLeft = secondsLeft & 60
console.log(hours, mins, secondsLeft)




//can do this with reduce only with out maps
