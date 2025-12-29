function en(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const sms = document.getElementById('sms').value;
    const tln = '923525563';

    const texto = `Ola! Me chamao ${nome}, ${sms}`;
    const smsf = encodeURIComponent(texto);
    const url = `https://wa.me/${tln}?text=${smsf}`;

    console.log(url);
    window.open(url, '_blank');
}

function menu() {
    let menuh = document.querySelector(".erre");
    if (menuh.classList.contains('open')) {
        document.querySelector(".menuh").src = "img/menu-aberto.png";

        menuh.classList.remove("open");
    } else {
        menuh.classList.add("open");
        document.querySelector(".menuh").src = "img/alfabeto.png";
    }
}

