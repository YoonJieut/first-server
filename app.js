const http = require('http');
// node에는 이런 것도 있습니다. 외우지마세요
// node.js documentation에 검색해봅시다.

// 올드 스쿨 방식으로 작성해봅니다.
// 우리는 이걸 외우지 못합니다
http.createServer(function(request,response){
  // 매개변수로 콜백함수로 받습니다.
  // 매개 변수 작명을 이렇게 하면 편하겠죠
  let writeHeadObject = {
    'Content-type' : 'text/html'
  }

  response.writeHead(200, writeHeadObject);
  response.end('hello');

}).listen(8080);
// 유명한 8080, 8000도 많이 씀
// 무슨 뜻인지는 모르겠지만 이 프로토콜을 바꾸지 못합니다.
// 여기서 내가 외울 것은 하나 없습니다만 왜 쓰이는지 알아야 합니다.


// url에 localhost:8080을 작성하면?
// 축하합니다. 서버를 직접 여셨습니다.
