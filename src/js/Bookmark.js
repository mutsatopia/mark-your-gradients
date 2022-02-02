//버튼 누르면 localstorage에 저장되도록 하기.
//localstorage 저장 확인
function local_store() {
  let output = localStorage.getItem('color');
  let nameKey = 'color';
  let arrValue = {};
  if (output && output.length > 0) {
    arrValue = JSON.parse(output);
    console.log(Object.keys(arrValue));
  }
  // arrValue에 이름이 있다면? - ! > 없을경우 참
  // localStorage.clear();
  if (
    !Object.keys(arrValue).includes(gradientData.name) &&
    Object.keys(arrValue).length < 5
  ) {
    arrValue[gradientData.name] = mainColor.style.background;
    console.log(arrValue);
    localStorage.setItem(nameKey, JSON.stringify(arrValue));
    console.log('값 추가 첫번째 경우');
    alert('color 저장을 완료했습니다!');
  }
  // arrvalue에 이름이 없다면 , 그리고 길이가 5 이상이면 맨 앞을 지운다.
  else if (
    !Object.keys(arrValue).includes(gradientData.name) &&
    Object.keys(arrValue).length >= 5
  ) {
    // 0번째 key값을 가지고 있는 것 localStorage에서 키값 지우기.
    console.log(Object.keys(arrValue)[0]);
    localStorage.removeItem(Object.keys(arrValue)[0]);
    delete arrValue[Object.keys(arrValue)[0]];
    console.log(arrValue);
    arrValue[gradientData.name] = mainColor.style.background;
    localStorage.setItem(nameKey, JSON.stringify(arrValue));
    console.log('값 추가 두번째 경우');
    alert('5개 칸이 꽉 차, 한 개를 삭제하고 저장했습니다');
  } else {
    alert('이미 저장되어있습니다.');
  }
}
