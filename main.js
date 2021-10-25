// fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
//     .then(res => res.json())
//     .then((result) => {
//           items= result.items;
//           console.log(items);
//         }),
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//        console.log(error);
//       }
//   Step1
fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    .then(function (res) {
        return res.json()
    })
    .then(function (result) {
        const items = result.items;
        console.log(items);
    });

function error(error) {
    console.log(error);
}
//   _____________________________________________________
// Step2
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
//   ________________________________________
// Timing Event======

let x;

function test() {
    document.getElementById("timeout_text").innerText =
        "The timeout has been started!";
    document.getElementById("timeout_text").style.color = "black";

x = setTimeout(function () {
    document.getElementById("timeout_text").innerText =
        "The timeout has been triggered!";
    document.getElementById("timeout_text").style.color = "green";
}, 3000);

}
function clear() {
    clearTimeout(x);
    document.getElementById("timeout_text").innerText=
    "The timeout has been cleared"
    document.getElementById("timeout_text").style.color = "black";
    
}