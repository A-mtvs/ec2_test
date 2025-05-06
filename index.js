// app.js 파일로 저장하세요.

const express = require('express');
const app = express();

// 서버가 수신할 포트 번호를 정의합니다.
// EC2 보안 그룹에서 이 포트를 열어줘야 외부 접속이 가능합니다.
// 이전 예제와 동일하게 3000 포트를 사용합니다.
const port = 8080;

// 루트 경로('/')에 대한 GET 요청을 처리하는 라우트를 정의합니다.
app.get('/', (req, res) => {
  // res.send()를 사용하여 응답을 전송합니다.
  // 기본적으로 Content-Type은 text/html로 설정되지만, 문자열을 보내면 잘 작동합니다.
  // 상태 코드는 기본적으로 200 OK입니다.
  res.send('hello ec2');
});

// 정의되지 않은 다른 경로에 대한 404 에러 핸들링 (선택 사항)
// app.use((req, res, next) => {
//   res.status(404).send('Not Found');
// });

// 지정된 포트에서 서버를 시작합니다.
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
  console.log(`EC2 인스턴스의 퍼블릭 IP와 포트(${port})로 접속해 보세요.`);
});