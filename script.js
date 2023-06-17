const settings = document.querySelector(".settings")
const settingsBtn = document.querySelector(".settings-btn")
const imageSection = document.querySelector(".image-section")

const eventName = document.querySelector("#event-name")
const eventDay = document.querySelector("#event-day")
const eventMonth = document.querySelector("#event-month")
const eventYear = document.querySelector("#event-year")
const eventImg = document.querySelector("#event-image")

const daysCount = document.querySelector(".days-count")
const hoursCount = document.querySelector(".hours-count")
const minutesCount = document.querySelector(".minutes-count")
const secondsCount = document.querySelector(".seconds-count")

const saveBtn = document.querySelector(".save")
const eventSpan = document.querySelector(".event")

let usersTime

const setTime = () => {
	const todaysDate = new Date()
	const result = usersTime - todaysDate

	const days = Math.floor(result / 1000 / 60 / 60 / 24)
	const hours = Math.floor(result / 1000 / 60 / 60) % 24
	const minutes = Math.floor(result / 1000 / 60) % 60
	const seconds = Math.floor(result / 1000) % 60

	daysCount.textContent = days
	hoursCount.textContent = hours
	minutesCount.textContent = minutes
	secondsCount.textContent = seconds
}

const update = () => {
	eventSpan.textContent = eventName.value
	usersTime = new Date(eventYear.value, eventMonth.value, eventDay.value)
	imageSection.style.backgroundImage = `url(${eventImg.value})`

	console.log(usersTime)
	setTime()
}

settingsBtn.addEventListener("click", () => {
	settings.classList.toggle("active")
})

saveBtn.addEventListener("click", update)

update()
setInterval(setTime, 1000)
