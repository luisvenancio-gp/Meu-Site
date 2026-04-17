function en(event) {
    event.preventDefault();

    const nome = document.getElementById('nome')?.value.trim();
    const sms = document.getElementById('sms')?.value.trim();
    const tln = '923525563';

    if (!nome || !sms) {
        alert('Por favor, preencha nome e mensagem antes de enviar.');
        return;
    }

    const texto = `Olá! Me chamo ${nome} e gostaria de dizer: ${sms}`;
    const smsf = encodeURIComponent(texto);
    const url = `https://wa.me/${tln}?text=${smsf}`;

    window.open(url, '_blank', 'noopener,noreferrer');
}

function menu() {
    const mobileNav = document.querySelector('.erre');
    const mobileIcon = document.querySelector('.menuh');
    if (!mobileNav || !mobileIcon) return;

    const isOpen = mobileNav.classList.toggle('open');
    mobileIcon.src = isOpen ? 'img/alfabeto.png' : 'img/menu-aberto.png';
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
}

const mobileLinks = document.querySelectorAll('.erre .link-1');
mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const mobileNav = document.querySelector('.erre');
        const mobileIcon = document.querySelector('.menuh');
        if (!mobileNav || !mobileIcon) return;

        if (mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open');
            mobileIcon.src = 'img/menu-aberto.png';
            mobileNav.setAttribute('aria-hidden', 'true');
        }
    });
});
