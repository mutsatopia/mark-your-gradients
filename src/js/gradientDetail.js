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

const modalBtn = document.querySelector(".modal-btn");
const content = document.querySelector(".modal-content")

modalBtn.addEventListener('click', () => {
  const tempElem = document.createElement('textarea');
  tempElem.value = '복사 성공';  
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand('copy');
})
