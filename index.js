const btn = document.querySelector('.btn')
const sendValue = () => {
    let a = "shalitha"

    localStorage.setItem('myNumber', a)
    window.location.href = "resive.html"
}

btn.addEventListener('click', sendValue)


