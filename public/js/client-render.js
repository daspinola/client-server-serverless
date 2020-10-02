document.addEventListener('DOMContentLoaded', init, false);

async function init() {
  const body = document.querySelector('body')
  const welcomeDiv = document.createElement('div')
  const hourDiv = document.createElement('div')
  const servelessHourDiv = document.createElement('div')
  const dateButton = document.createElement('button')

  const serverlessResponse = await fetch('http://localhost:3000/dev/serverDate')
    .then(res => res.json())

  dateButton.innerHTML = 'Date'
  welcomeDiv.innerHTML = `Welcome to the client render version, this text was added on your browser.`
  servelessHourDiv.innerHTML = `Serverless function server date:${serverlessResponse.serverDate}`

  body.appendChild(welcomeDiv)
  body.appendChild(servelessHourDiv)
  body.appendChild(dateButton)

  dateButton.addEventListener('click', () => {
    const date = new Date()

    hourDiv.innerHTML = `It's now ${date}`

    body.appendChild(hourDiv)
  })

  
}
