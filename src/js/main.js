// list-miniboxli backgroundColor 지정하기
const colorMiniArray = [
  '#D0637C',
  '#F27F0C',
  '#F7AD19',
  'yellow',
  '#B3DBD8',
  '#288994',
  '#0196C1',
  '#697A98',
  'black',
];
const colorMiniBtn = document.querySelectorAll('.list-minibox li button');
const colorMainBox = document.querySelectorAll('.list-mainbox li');

// defualt color
let i = 0;
while (i < colorMiniArray.length) {
  colorMiniBtn.forEach((el) => {
    el.style.backgroundColor = `${colorMiniArray[i]}`;
    i += 1;
  });
}
i = 0;
colorMainBox.forEach((box, i) => {
  const defaultData = data.filter((d) => d.id === i)[0];
  const colorNameTxt = box.querySelector('.box-txt');
  box.style.background = `linear-gradient(to right, ${defaultData.colors[0]}, ${defaultData.colors[1]})`;
  colorNameTxt.innerHTML = `${defaultData.name}`;
});

//main color box
colorMiniBtn.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    let startId = index * 9;
    const selecData = data
      .filter((s) => s.id >= startId && s.id < startId + 9)
      .map(function (obj) {
        let dataObj = {};
        dataObj.name = obj.name;
        dataObj.colors = obj.colors;
        return dataObj;
      });

    colorMainBox.forEach((ele, index) => {
      ele.style.background = `linear-gradient(to right, ${selecData[index].colors[0]}, ${selecData[index].colors[1]})`;
      const colorNameTxt = ele.querySelector('.box-txt');
      colorNameTxt.innerHTML = `${selecData[index].name}`;
    });
  });
});

// rotate
const rotate_Btn = document.querySelector('.rotate-btn');
const rotate_Direction = ['to right', 'to bottom', 'to left', 'to top'];
let rotate_index = 0;
rotate_Btn.addEventListener('click', () => {
  rotate_index++;
  colorMainBox.forEach((ele) => {
    let mainBoxColorName = ele.textContent;
    mainBoxColorName = mainBoxColorName.trim();
    let selecColor = data
      .filter((s) => s.name === mainBoxColorName)
      .map((s) => s.colors);
    ele.style.background = `linear-gradient(${
      rotate_Direction[rotate_index % 4]
    }, ${selecColor[0][0]}, ${selecColor[0][1]})`;
  });
});

// page
colorMainBox.forEach((ele, index) => {
  ele.addEventListener('click', () => {
    let getName = ele.innerText;
    getName = getName.replace(/(\s*)/g, '');
    location.assign(`${URL_CONSTANT}/gradation/#${getName}`);
  });
});
