import {
    categoryArr,
    manTitle1,
    manTitle2,
    womenTitle1,
    womenTitle2,
    accessoriesTitle1,
    accessoriesTitle2,
    descriptionArr,
    price,
    textureArr,
    wash1,
    wash2,
    placeArr,
    noteArr,
    slotAArr,
    slotBArr,
    slotCArr,
    colorArr,
    sizeArr,
    stock,
} from "./randomWord.js";

function randomArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
//以下定義category
const cat = `${randomArr(categoryArr)}`;
//以下定義title
let title 
if (cat === "men") {
     title = `${randomArr(manTitle1)}${randomArr(manTitle1)}${randomArr(manTitle2)}`;
} else if (cat === "women") {
     title = `${randomArr(womenTitle1)}${randomArr(womenTitle1)}${randomArr(womenTitle2)}`;
} else if (cat === "accessories") {
     title = `${randomArr(accessoriesTitle1)}${randomArr(accessoriesTitle1)}${randomArr(accessoriesTitle2)}`;
}
//





//以下腳本,請改好自己前端input標籤的id屬性腳本才抓得到
let script = `document.getElementById('category').value="${cat}"; document.getElementById('title').value="${title}";  document.getElementById('description').value="${randomArr(descriptionArr)}"; document.getElementById('price').value="${price}"; document.getElementById('texture').value="${randomArr(textureArr)}"; document.getElementById('wash').value="${randomArr(wash1)}${randomArr(wash2)}";  document.getElementById('place').value="${randomArr(placeArr)}"; document.getElementById('note').value="${randomArr(noteArr)}"; document.getElementById('story').value="${`有一個${randomArr(slotAArr)}買了它後，在${randomArr(slotBArr)}${randomArr(slotCArr)}。`}"`
//以下庫存顏色隨機產生器
let variant =`${randomArr(colorArr)} ${randomArr(sizeArr)} ${stock}`

console.log(`${script}      ${variant}`)
