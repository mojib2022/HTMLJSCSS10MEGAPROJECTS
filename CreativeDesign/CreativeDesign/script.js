
// Developer info toggle
document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change') //toggling the button style
        btn.nextElementSibling.classList.toggle('change') // toggling the developer info
    })
})
//end of developer info toggle