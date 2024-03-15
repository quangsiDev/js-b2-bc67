function sendMessage() {
  var result = document.getElementById("result");
  var text = document.getElementById("content").value;
  var message = text;
  result.innerText = message;
  //   sau 1s hiển thị thông báo tiếp theo
  setTimeout(function () {
    message = `
    <h3> ${text}</h3>
    <h3 class="text-danger">Em chưa ăn</h3>
    `;
    result.innerHTML = message;
  }, 1000);
}
