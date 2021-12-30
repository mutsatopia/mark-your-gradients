// list-miniboxli backgroundColor 지정하기
const colorMiniArray = ["#D0637C", "#F27F0C", "#F7AD19", "yellow", "#B3DBD8", "#288994", "#0196C1", "#697A98", "black"]

const colorMiniBtn = document.querySelectorAll('.list-minibox li button');

let i =0;
while ( i < colorMiniArray.length){
    colorMiniBtn.forEach(el => {
        // console.log(`${colorMiniArray[i]}`);
        el.style.backgroundColor = `${colorMiniArray[i]}`;
        i+=1;
    })
}



//main color box

const maincolorLi = document.querySelectorAll('.list-mainbox li')
const direction = ['top', 'right', 'bottom', 'left'];

for (const minibtn of colorMiniBtn){
    minibtn.addEventListener("click", printColor());
}
function printColor() {
    for (const buttonNum in colorMiniBtn){
        
        let selectColors = data.filter(i => i.id === (buttonNum*9)).map(i => i.colors);
        console.log(selectColors);
        let color1 = selectColors[0];
        let color2 = selectColors[1];
    }
}

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
const txt =document.querySelector('.box-txt');
for (const box of maincolorLi){
    box.addEventListener('click', () => {
        if (!txt.contains('hide')){
            txt.classList.add('hide');
        }else{
            txt.classList.remove('hide')
        }
    })
    
}

