const arrow = document.querySelector(".arrow")
const speed = document.querySelector(".speed-value")

navigator.geolocation.watchPosition(() => {
  console.log(data)
  speed.textContent = Match.round(data.cords.speed)
  arrow.style.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
  console.log(err)
  alert("please allow your geolocation services")
})
