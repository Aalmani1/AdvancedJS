async function req() {
  const res = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699"
  );
  const result = await res.json();

  console.log("work");

  let title = result.items[0].volumeInfo.title;
  let description = result.items[0].volumeInfo.description;
  console.log(title);
  console.log(description);

  function erorr(error) {
    console.log(error);
  }
}
req();

///=============================================================

let count;
function start() {
  document.getElementById("timeout_text").innerHTML =
    "The timeout has been started!";
  document.getElementById("timeout_text").style.color = "black";

  count = setTimeout(function () {
    document.getElementById("timeout_text").innerHTML =
      "The timeout has been triggered!";
    document.getElementById("timeout_text").style.color = "green";
  }, 3000);
}

function clearr() {
  clearTimeout(count);
}
