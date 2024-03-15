var account = document.getElementById("account");
var password = document.getElementById("password");

account.value = "alice@gmail.com";
console.log("😀 - account", account);

/**
 *
 * function tenFumction(){
 *     nội dung function (sẽ không tự chạy khi user load trang)
 *  }
 */

function login() {
  var accountValue = account.value;
  var passwordValue = password.value;
  console.log(accountValue, passwordValue);
  //   show nội dung user vừa nhập lên màn hình
  //   dom tới thẻ #result
  //   document.getElementById("result").innerHTML =
  //     "Tài khoản của bạn: " + accountValue + "<br/>" + passwordValue;
  document.getElementById("result").innerHTML = `
  <h3>Tài khoản của bạn: ${accountValue}</h3>
  <h3 class="text-success">Mật khẩu của bạn: ${passwordValue} </h3>
`;
  // gọi tới thuộc tính class của 1 thẻ => classList
  document.getElementById("result").classList.toggle("text-danger");
}
/**
 *  2 trường hợp code chạy
 *  + khi user load trang
 *  + khi gọi 1 function
 */
