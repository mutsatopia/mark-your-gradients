function palette_generate() {
  let colorArray = localStorage.getItem('color');
  let nameKey = 'color';
  let arrValue = {};
  console.log('-------------');
  console.log(colorArray);
  if (colorArray && colorArray.length > 0) {
    arrValue = JSON.parse(colorArray);
    console.log('-----1--------');
    console.log(Object.keys(arrValue));
  }
  console.log('--------2-----');
  console.log(arrValue);
  if (arrValue && arrValue.length == undefined) {
    console.log('------3-------');
    let Area = document.getElementById('sect');
    console.log('값없음 !');
    let h3_tag = document.createElement('h3');
    h3_tag.innerHTML = '저장한 Color가 없습니다.';
    Area.appendChild(h3_tag);
  } else {
    for (var i of Object.keys(arrValue)) {
      console.log(`${i}`);
      console.log('-------4------');
      let Area = document.getElementById('sect');
      let newArticle = document.createElement('article');
      let newDiv = document.createElement('div');
      newArticle.setAttribute('class', 'art');
      // console.log(arrValue[i])
      // var newArticle_Style =
      //   'background: linear-gradient(to bottom, #33ccff 0%, #ff66ff 100%);';
      // newArticle.setAttribute('style', newArticle_Style);
      newArticle.style.background = arrValue[i];
      newDiv.setAttribute('class', 'color-name');
      newDiv.innerHTML = `${i}`;
      Area.appendChild(newArticle);
      newArticle.appendChild(newDiv);
    }
  }
  console.log('-----last--------');
}
// data개수만큼 칸 생성 및 색명 추가
palette_generate();
