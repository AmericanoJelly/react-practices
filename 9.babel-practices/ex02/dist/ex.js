// 블록 스코프 변수 (es6)
const user = [{
  no: 1,
  name: '마이콜',
  email: 'michol@gamil.com'
}, {
  no: 2,
  name: '둘리',
  email: 'dooly@gamil.com'
}]; //객체분해(es6)

function print({
  no,
  name,
  email
}) {
  // 템프릿 문자열(es6)
  console.log(`${no}:${name}:${email}`);
} //for..of(es6)


for (let user of users) {
  print(user);
}