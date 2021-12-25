const closeBtn = document.querySelector('.btn-close');
const openBtn = document.querySelector('.btn-show');
const modalCon = document.querySelector('.modal-container');

closeBtn.addEventListener('click', () => {
  modalCon.classList.add('dis-none');
  openBtn.classList.remove('dis-none');
});
openBtn.addEventListener('click', () => {
  modalCon.classList.remove('dis-none');
  openBtn.classList.add('dis-none');
});
