(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();

var modal = document.getElementById("mobile-nav-modal");
var btn = document.getElementById("open-mobile-nav-button");
var cls = document.getElementsByClassName("mobile-nav-close-button")[0];

btn.onclick = function () {
    modal.style.display = "flex";
}

cls.onclick = function () {
    modal.style.display = "none";
}