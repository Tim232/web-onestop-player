let player = new Plyr('#player')
let cookies = {}
let times = 0
document.cookie.split('; ').forEach(item => {
  cookies[item.split('=')[0]] = item.split('=')[1]
})

if (typeof cookies.GANG != 'undefined') {
    times = Number(cookies.GANG)
}

document.querySelector('.GANG_times').innerHTML = `${times}깡`

player.on('ended', e => {
    let expireDate = new Date()
    expireDate.setHours(23, 59, 59, 0)
    document.cookie = `GANG=${++times};Expires=${expireDate.toUTCString()};Path=/`
    document.querySelector('.GANG_times').innerHTML = `${times}깡`
})

/*
document.querySelector('h1 span').addEventListener('keypress', e => {
    if (isNaN(String.fromCharCode(e.which))) {
        e.preventDefault()
    }
})
*/