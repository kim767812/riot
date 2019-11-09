const fs = require('fs');

// fs.readFile("champ.json", "utf8", (err, data)=>{
//     console.log(data);
// });

let json = fs.readFileSync("champ.json", "utf8");
json = JSON.parse(json);

let champList = json.data;

let keyList = Object.keys(champList);

let myJson = [];

for(let i = 0; i < keyList.length; i++){
    let item = champList[keyList[i]];
    let myItem = {name:item.name, id:item.id, img:item.image.full};
    myJson[item.key] = myItem;
}

fs.writeFileSync("mychamp.json", JSON.stringify(myJson), "utf8");