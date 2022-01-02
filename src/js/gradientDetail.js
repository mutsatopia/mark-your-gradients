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

let gradientName = location.hash.substring(1);
let gradientData = data.find(
  (value) => value.name.replace(/ /g, '') === gradientName,
);

const colorCode = document.querySelectorAll('.value-color');

colorCode.forEach((value, index) => {
  value.innerText = gradientData.colors[index];
});

const colorName = document.querySelector('.color-name');
colorName.innerText = gradientData.name;

const mainColor = document.querySelector('.main-color');
mainColor.style.background = `linear-gradient(to right, ${gradientData.colors[0]}, ${gradientData.colors[1]})`;

const copyContent = document.querySelector('.content');
copyContent.innerHTML = `linear-gradient(<strong>to right</strong>, <strong>${gradientData.colors[0]}</strong>, <strong>${gradientData.colors[1]}</strong>);`;

const modalBtn = document.querySelector('.modal-btn');
const preColorName = data
  .find((value) => value.id === gradientData.id - 1)
  ?.name.replace(/ /g, '');
const nextColorName = data
  .find((value) => value.id === gradientData.id + 1)
  ?.name.replace(/ /g, '');
const linkDataArr = [preColorName, nextColorName];

const pageLink = document.querySelectorAll('.link-page');
pageLink.forEach((value, index) => {
  if (!linkDataArr[index]) value.style.display = 'none';
  else value.href = `${URL_CONSTANT}/gradation/#${linkDataArr[index]}`;
});

const rotateBtn = document.querySelector('.rotate-btn');
const rotateDirection = ['to right', 'to bottom', 'to left', 'to top'];
let rotateIndex = 0;
rotateBtn.addEventListener('click', () => {
  mainColor.style.background = `linear-gradient(${
    rotateDirection[++rotateIndex % 4]
  }, ${gradientData.colors[0]}, ${gradientData.colors[1]})`;
  copyContent.innerHTML = `linear-gradient(<strong>${
    rotateDirection[rotateIndex % 4]
  }</strong>, <strong>${gradientData.colors[0]}</strong>, <strong>${
    gradientData.colors[1]
  }</strong>);`;
});

modalBtn.addEventListener('click', () => {
  const tempElem = document.createElement('textarea');
  tempElem.value = `background: linear-gradient(${
    rotateDirection[rotateIndex % 4]
  }, ${gradientData.colors[0]}, ${gradientData.colors[1]});`;
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand('copy');
  alert('복사되었습니다!');
});

pageLink.forEach((ele, index) => {
  ele.addEventListener('click', () => {
    location.assign(`${URL_CONSTANT}/gradation/#${linkDataArr[index]}`);
    location.reload();
  });
});
