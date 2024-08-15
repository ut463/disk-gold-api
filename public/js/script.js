const cards = document.querySelectorAll(".card");

if (cards.length) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                console.log(entry);
                entry.target.classList.add("show", entry.isIntersecting)
                if (entry.isIntersecting) observer.unobserve(entry.target)
            })
        },
        {
            root: document.querySelector('.card-container'),
            threshold: 1,
        }
    )
    cards.forEach(card => {
        observer.observe(card)
    });
}
