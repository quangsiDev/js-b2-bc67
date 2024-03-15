// dom ~ sử dụng javascrip để trỏ tới thẻ html

var h1Tag = document.getElementById("title");
console.log("😀 - h1Tag", h1Tag);

// h1Tag.style.color = "red";
document.getElementById("title").style.color = "red";
h1Tag.style.backgroundColor = "black";

// update nội dung của thẻ

h1Tag.innerHTML = "Chào buổi sáng";

// h1Tag.innerText = "<p>Hello 123</p>";
h1Tag.innerHTML = "<p>Hello 123</p>";
h1Tag.innerText = "Good                <br />     bye";
h1Tag.innerHTML = "Good                <br />     bye";
