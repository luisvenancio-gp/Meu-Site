
const card = document.querySelector('.card-glow');
if (card) {
    card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
        const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
        card.style.transform = `rotateX(${y * 4}deg) rotateY(${x * 6}deg)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
}