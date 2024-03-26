var userscore = document.getElementById("userscore"); //userscore를 쓰기 위해 html의 userscore 를 가져오는 코드
userscore.innerHTML="10"; //userscore 객체의 콘텐츠를 0에서 10으로 변경

var divarr = document.getElementsByTagName("div");
for(var i=0;i<divarr.length;i++){ //divarr 객체 배열의 원소 개수만큼 반복
    divarr[i].style.backgroundColor="black";
    divarr[i].style.color="white"; 
}
var newObj = document.createElement("p");
newObj.innerHTML = "컴퓨터가 이겼습니다." //innerHTML 추가
newObj.setAttribute("id", "pid"); //id 추가
newObj.style.color="orange"; //style 추가

var bodyObj = document.getElementsByTagName("body")[0];
bodyObj.appendChild(newObj);