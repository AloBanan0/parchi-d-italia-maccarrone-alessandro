const hidden = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
    console.log(entries)
}, {
    threshold: 1,
}) 

hiddenElements.forEach(hiddenElements => {
    observer.observe(hiddenElements)
})