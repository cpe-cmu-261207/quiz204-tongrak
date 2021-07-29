const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

const autherCode = 630610730;
const lengthVal = length.value;
const wholePara =  document.getElementById('text');
let clickOnce = false;

const searchBut = document.getElementById('search');

const autherBox = document.getElementById("author");

const cout = console.log;

searchBut.onclick = () => {

}


btn_toggle.onclick = () => {
  // cout(author)
  if(clickOnce){
    autherBox.innerHTML = "630610730 TONGRAK RUENTO";
    btn_toggle.innerHTML = "Display Calculator"
    clickOnce = false;
  }else{
    autherBox.innerHTML = autherCode-lengthVal;
    btn_toggle.innerHTML = "Display Auther"
    clickOnce = true;
  }
}



// more codes for Search and Reset buttons here
