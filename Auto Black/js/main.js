document.addEventListener('DOMContentLoaded', () => {
    const filterCategory = document.getElementById('filter-category');
    const filterBrand = document.getElementById('filter-brand');
    const filterModel = document.getElementById('filter-model');
    const filterYear = document.getElementById('filter-year');
    const filterSearch = document.getElementById('filter-search');
    const filterReset = document.getElementById('filter-reset');
    const searchMessage = document.getElementById('search-message');
    const cards = Array.from(document.querySelectorAll('.card'));
    const btnBuscarHero = document.getElementById('btn-buscar-hero');
    const btnSaibaMais = document.getElementById('btn-saiba-mais');
    const newsletterSubmit = document.getElementById('newsletter-submit');
    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterMessage = document.getElementById('newsletter-message');
    const modal = document.getElementById('detail-modal');
    const closeModal = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalBrand = document.getElementById('modal-brand');
    const modalModel = document.getElementById('modal-model');
    const modalYear = document.getElementById('modal-year');
    const modalPrice = document.getElementById('modal-price');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    function filterCars() {
        const category = filterCategory.value;
        const brand = filterBrand.value;
        const model = filterModel.value;
        const year = filterYear.value;

        let visibleCount = 0;

        cards.forEach((card) => {
            const matchesCategory = !category || card.dataset.category === category;
            const matchesBrand = !brand || card.dataset.brand === brand;
            const matchesModel = !model || card.dataset.model === model;
            const matchesYear = !year || card.dataset.year === year;
            const shouldShow = matchesCategory && matchesBrand && matchesModel && matchesYear;

            card.style.display = shouldShow ? 'block' : 'none';
            if (shouldShow) visibleCount += 1;
        });

        if (visibleCount === 0) {
            searchMessage.textContent = 'Nenhum veículo encontrado. Ajuste os filtros e tente novamente.';
        } else {
            searchMessage.textContent = `${visibleCount} veículo(s) encontrado(s).`;
        }
    }

    function resetFilters() {
        filterCategory.value = '';
        filterBrand.value = '';
        filterModel.value = '';
        filterYear.value = '';
        searchMessage.textContent = '';
        cards.forEach((card) => {
            card.style.display = 'block';
        });
    }

    function showModal(card) {
        const title = card.querySelector('h3').textContent;
        modalTitle.textContent = title;
        modalCategory.textContent = `Categoria: ${card.dataset.category}`;
        modalBrand.textContent = `Marca: ${card.dataset.brand}`;
        modalModel.textContent = `Modelo: ${card.dataset.model}`;
        modalYear.textContent = `Ano: ${card.dataset.year}`;
        modalPrice.textContent = `Preço: R$ ${Number(card.dataset.price).toLocaleString('pt-BR')}`;
        modal.classList.remove('hidden');
    }

    function hideModal() {
        modal.classList.add('hidden');
    }

    filterSearch.addEventListener('click', filterCars);
    filterReset.addEventListener('click', resetFilters);

    btnBuscarHero.addEventListener('click', () => {
        document.getElementById('busca').scrollIntoView({ behavior: 'smooth' });
    });

    btnSaibaMais.addEventListener('click', () => {
        document.getElementById('destaques').scrollIntoView({ behavior: 'smooth' });
    });

    newsletterSubmit.addEventListener('click', () => {
        const email = newsletterEmail.value.trim();
        if (!email || !email.includes('@')) {
            newsletterMessage.textContent = 'Por favor, insira um e-mail válido.';
            newsletterMessage.style.color = '#ff8080';
            return;
        }
        newsletterMessage.textContent = 'Obrigado! Você receberá novidades em breve.';
        newsletterMessage.style.color = '#a2ffa2';
        newsletterEmail.value = '';
    });

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.querySelectorAll('.detail-button').forEach((button) => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            if (card) showModal(card);
        });
    });

    closeModal.addEventListener('click', hideModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) hideModal();
    });

    resetFilters();
});