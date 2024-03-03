const musicBtn = document.getElementById("music-button")
const musicbox = document.getElementById("music-box")
musicBtn.addEventListener("click" , () =>{
    musicbox.innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/mnwj6KxAvFc?si=lFO6aKG5kd5pQXYH\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
})