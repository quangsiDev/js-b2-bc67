var img = document.getElementById("light");
function turnOn() {
  // local variable
  img.src = "./BAT_TAT_DEN/pic_bulbon.gif";
}

function turnOff() {
  //   var img = document.getElementById("light");
  img.src = "./BAT_TAT_DEN/pic_bulboff.gif";
}

// scope ~ phạm vi hoạt động của 1 biến

// global variable ~ biến tạo bên ngoài function ~ sử dụng được mọi nơi trong file

// local variable ~ biến tạo bên trong 1 function ~ chỉ sự dụng trong phạm vi function đó, ra ngoài function => lỗi

// refactor
