function callBack1(params) {
  setTimeout(() => {
    console.log("Rudyard Kipling 1910");
  }, 1000);
  callBack2();
}
function callBack2() {
  setTimeout(() => {
    console.log("Poem the if");
  }, 2500);
  callBack3();
}
function callBack3() {
  setTimeout(() => {
    console.log("If you can keep your head when all about you");
  }, 3500);
  callBack4();
}
function callBack4() {
  setTimeout(() => {
    console.log("Are losing theirs and blaming it on you,");
  }, 4500);
  callBack5();
}
function callBack5() {
  setTimeout(() => {
    console.log("If you can trust yourself when all men doubt you,");
  }, 5500);
  callBack6();
}
function callBack6() {
  setTimeout(() => {
    console.log("But make allowance for their doubting too;");
  }, 6500);
  callBack7();
}
function callBack7() {
  setTimeout(() => {
    console.log("If you can wait and not be tired by waiting,");
  }, 7500);
  callBack8();
}
function callBack8() {
  setTimeout(() => {
    console.log("Or being lied about, don’t deal in lies,");
  }, 8500);
  callBack9();
}
function callBack9() {
  setTimeout(() => {
    console.log("Or being hated, don’t give way to hating,");
  }, 9500);
  callBack10();
}
function callBack10() {
  setTimeout(() => {
    console.log("And yet don’t look too good, nor talk too wise");
  }, 10500);
  callBack11()
}
function callBack11() {
  setTimeout(() => {
    console.log("End. ");
  }, 11500);
}

callBack1(callBack2);
