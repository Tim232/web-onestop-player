let player = new Plyr('#player')
let cookies = {}
let times = 0
document.cookie.split('; ').forEach(item => {
  cookies[item.split('=')[0]] = item.split('=')[1]
})




