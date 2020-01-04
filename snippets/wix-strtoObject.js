function toObj(str) {
    let lines = str.split("\n");
    let obj = {};
    for(let line of lines) {
      let key = line.split(":") [0];
      obj[key] = line.slice(line.indexOf(":") + 1);
    }
    return obj;
}
/*

//sample input

let str = `sku: "001"
addFaq: true
image: "wix:image://v1/46e3aa_70c8ed13ae6a470c9c7d204ee21ec20f~mv2.png/2019-12-27_130524.png#originWidth=393&originHeight=55"
description: "<p>desc</p>"
_id: "e166f00f-396b-4460-b768-5bbf8818d3c2"
_owner: "46e3aa9b-054b-4c9b-af0f-be6d03a0b17b"
_createdDate: "2019-12-23T11:00:16.114Z"
price: 123
seoDesc: "This is the description"
_updatedDate: "2020-01-04T22:09:03.123Z"
addNotes: true
seoTitle: "This is the title of the SEO"
media: [...]
productName: "fullData"
title: "test"
visibility: true
link-product-sku: "/product/001"
link-product-update-sku: "/product/update/001"`
`

toObj(str);

*/
