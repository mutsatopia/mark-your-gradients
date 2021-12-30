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
  
  let i = 0;
  while (i < colorMiniArray.length) {
    colorMiniBtn.forEach((el) => {
      el.style.backgroundColor = `${colorMiniArray[i]}`;
      i += 1;
    });
  }
  
  //main color box
  colorMiniBtn.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      let startId = index * 9;
      const selecColors = data
        .filter((s) => s.id >= startId && s.id < startId + 9)
        .map((s) => s.colors);
      colorMainBox.forEach((ele, index) => {
        ele.style.background = `linear-gradient(to right, ${selecColors[index][0]}, ${selecColors[index][1]})`;
      });
    });
  });
  
 
  //mainbox - txt
  // const txt =document.querySelector('.box-txt');
  // for (const box of maincolorLi){
  //     box.addEventListener('click', () => {
  //         if (!txt.contains('hide')){
  //             txt.classList.add('hide');
  //         }else{
  //             txt.classList.remove('hide')
  //         }
  //     })
  
  // }
