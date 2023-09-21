// reveal animation

const filterDivs = document.querySelectorAll('.filterDiv');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

filterDivs.forEach(div => {
    observer.observe(div);
});