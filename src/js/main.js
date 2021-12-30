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
    // console.log(`${colorMiniArray[i]}`);
    el.style.backgroundColor = `${colorMiniArray[i]}`;
    i += 1;
  });
}

//main color box
colorMiniBtn.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    let start_id = index * 9;
    let end_id = index * 9 + 8;
    
    const selecColors = data.filter((s) => s.id === index*9).map((s) => s.colors);
    const color1 = selecColors[0][0];
    const color2 = selecColors[0][1];
    // const b_index =  % 9;
    // const selecBox = colorMainBox[b_index];
//   console.log(colorMainBox[b_index].style.background='red');
    console.log(color1, color2)
    // selecBox.style.background = `linear-gradient( to-right ${color1},${color2})`;
    
  });
});

// for (const button of colorMiniBtn){
//     button.addEventListener('click', function(event){
//         const color1 = button.style.backgroundColor;
//         for (const box of maincolorLi){
//             console.log(box);
//             if (button.style.backgroundColor === `#D0637C`){
//                 const color2 = color[0].red1;
//                 const color2 = `yellow`;
//                 console.log(color2);
//                 box.style.background = `to bottom linear-gradient(${color1},${color2})`
//             }
//         }
//         maincolorLi[1].style.backgroundColor =`yellow`;
//     })
// }

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
