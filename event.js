const password = document.getElementById("password");
const passwordRecheck = document.getElementById("passwordRecheck");
const passwordButton = document.getElementById("passwordChecking");
const id = document.getElementById("id");

function passwordCheck() {
  if (password.value !== passwordRecheck.value)
    alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
  else alert("비밀번호가 일치합니다.");
}

function mouseOver() {
  passwordButton.style.color = "red";
}

function mouseOut() {
  passwordButton.style.color = "black";
}
passwordButton.onmouseout = mouseOut;
passwordButton.onmouseover = mouseOver;

id.addEventListener("keydown", noNumber);

function noNumber(e) {
  if (e.keyCode >= 48 && e.keyCode <= 57)
    alert("경고! 아이디에는 숫자를 사용할 수 없습니다.");
}
