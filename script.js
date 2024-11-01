let to_do = [];

let imgs = [
  "./photo/1.jpg",
  "./photo/2.jpg",
  "./photo/3.jpg",
  "./photo/4.jpg",
  "./photo/5.jpg",
  "./photo/6.jpg",
  "./photo/7.jpg",
  "./photo/8.jpg",
];
let imk = [
  "./photo/9.jpg",
  "./photo/10.jpg",
  "./photo/12.jpg",
  "./photo/13.jpg",
  "./photo/14.jpg",
  "./photo/15.jpg",
  "./photo/16.jpg",
  "./photo/11.jpg",
];

pass = prompt("Enter the password");
while (pass != "1") {
  pass = prompt("Incorrect please try again");
}
function render(arr) {
  document.getElementById("box").innerHTML = "";
  arr.forEach(function (i) {
    let newElem = document.createElement("div");
    newElem.innerHTML = i;
    newElem.classList =
      "flex w-[300px] h-[100px] bg-gradient-to-r from-cyan-400 via-blue-500 to-[#00008b] text-white mb-2 m-auto rounded-xl text-center justify-center items-center text-3xl hover:scale-[1.2] duration-700";
    document.getElementById("box").appendChild(newElem);
  });
}
function diddyParty(arr) {
  document.getElementById("blue").innerHTML = "";
  arr.forEach(function (i) {
    let newElem = document.createElement("img");
    newElem.src = i;
    newElem.classList =
      "flex w-[400px] h-[250px] bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 text-white mb-2 m-auto rounded-xl text-center justify-center items-center flex-wrap text-3xl hover:scale-[1.2] duration-700 p-4";
    document.getElementById("blue").appendChild(newElem);
  });
}
function allWhiteParty(arr) {
  document.getElementById("red").innerHTML = "";
  arr.forEach(function (i) {
    let newElem = document.createElement("img");
    newElem.src = i;
    newElem.classList =
      "flex w-[400px] h-[250px] bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 text-white mb-2 m-auto rounded-xl text-center justify-center items-center flex-wrap text-3xl hover:scale-[1.2] duration-700 p-4";
    document.getElementById("red").appendChild(newElem);
  });
}
function Add() {
  let add = prompt("Enter a on To-Do-List");
  to_do.push(add);
  render(to_do);
}
function RemoveB() {
  to_do.pop();
  render(to_do);
}
function Sort() {
  to_do.sort();
  render(to_do);
}
function ASort() {
  to_do.sort();
  to_do.reverse();
  render(to_do);
}
function Reverse() {
  to_do.reverse();
  render(to_do);
}
function FIL() {
  let a = prompt("what do you wish to filter");
  gay = to_do.filter((to_do) => to_do.includes(a));
  render(gay);
}
function Return() {
  render(to_do);
}
function RemoveT() {
  to_do.reverse();
  to_do.pop();
  to_do.reverse();
  render(to_do);
}
function profile() {
  diddyParty(imgs);
}
function pro() {
  allWhitePartyParty(imk);
}
function RemoveD() {
  let x = prompt("What do you want to remove");
  let removeItem = to_do.filter((item) => item != x);
  to_do = removeItem;
  render(to_do);
}
function mode() {
  if (document.body.className.includes("bg-black")) {
    document.body.className = "bg-white transition-all";
    document.getElementById("DLmode").innerHTML = "Light Mode";
    document.getElementById("a").className =
      "text-lg h-[60px] w-[80px] bg-white text-black mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("b").className =
      "text-lg h-[60px] w-[80px] bg-white text-black mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("c").className =
      "text-lg h-[60px] w-[80px] bg-white text-black mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("d").className =
      "text-lg h-[60px] w-[80px] bg-white text-black mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("e").className =
      "text-lg h-[60px] w-[80px] bg-white text-black mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("f").className =
      "text-lg h-[60px] w-[80px] bg-white text-black mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("g").className =
      "text-lg h-[60px] w-[80px] bg-white text-black mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("h").className =
      "text-lg h-[60px] w-[80px] bg-white text-black mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("i").className =
      "text-lg h-[60px] w-[80px] bg-white text-black mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("pro").className =
      "text-lg h-[60px] w-[80px] bg-white text-blue-700 rounded-lg transiton-all hover:scale-[1.2] active:scale-[0.8] duration-500 mg-auto mt-2";
    document.getElementById("profile").className =
      "text-lg h-[60px] w-[80px] bg-white text-red-700 rounded-lg transiton-all hover:scale-[1.2] active:scale-[0.8] duration-500 mg-auto mt-2";
    document.getElementById("DLmode").className =
      "text-lg h-[60px] w-[80px] bg-white text-black rounded-lg transiton-all hover:scale-[1.2] active:scale-[0.8] duration-500 mg-auto";
    document.getElementById("List").className = "text-xl mb-3 text-white";
  } else {
    document.body.className = "bg-black transition-all";
    document.getElementById("DLmode").innerHTML = "Dark Mode";
    document.getElementById("a").className =
      "text-lg h-[60px] w-[80px] bg-black text-white mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("b").className =
      "text-lg h-[60px] w-[80px] bg-black text-white mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("c").className =
      "text-lg h-[60px] w-[80px] bg-black text-white mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("d").className =
      "text-lg h-[60px] w-[80px] bg-black text-white mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("e").className =
      "text-lg h-[60px] w-[80px] bg-black text-white mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("f").className =
      "text-lg h-[60px] w-[80px] bg-black text-white mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("g").className =
      "text-lg h-[60px] w-[80px] bg-black text-white mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("h").className =
      "text-lg h-[60px] w-[80px] bg-black text-white mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("i").className =
      "text-lg h-[60px] w-[80px] bg-black text-white mb-1 rounded-lg transition-all hover:scale-[1.2] active:scale-[0.8] ml-1 duration-500";
    document.getElementById("pro").className =
      "text-lg h-[60px] w-[80px] bg-black text-blue-700 rounded-lg transiton-all hover:scale-[1.2] active:scale-[0.8] duration-500 mg-auto mt-2";
    document.getElementById("profile").className =
      "text-lg h-[60px] w-[80px] bg-black text-red-700 rounded-lg transiton-all hover:scale-[1.2] active:scale-[0.8] duration-500 mg-auto mt-2";
    document.getElementById("DLmode").className =
      "text-lg h-[60px] w-[80px] bg-black text-white rounded-lg transiton-all hover:scale-[1.2] active:scale-[0.8] duration-500 mg-auto";

    document.getElementById("List").className = "text-xl mb-3 text-black";
  }
}
