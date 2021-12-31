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
// const colorNameBox = colorMainBox.querySelector('.box-txt')
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
  const defaultData = data
    .filter((d) => d.id === i)
    .map(function(obj){
      const defualtObj = {};
      defualtObj.name = obj.name;
      defualtObj.colors = obj.colors;
      return defualtObj;
    });
  // const defaultData = data.filter((d) => d.id === i).map((d) => d.colors);
  console.log(defaultData)
  const colorNameTxt = box.querySelector('.box-txt');
  box.style.background = `linear-gradient(to right, ${defaultData[0].colors[0]}, ${defaultData[0].colors[1]})`;
  colorNameTxt.innerHTML = `${defaultData[0].name}`
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
