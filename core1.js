//Core modulite se moduli koi se vgradeni vo node, za razlika od eksternite koi treba da se instaliraat
//Path modulot obezbeduva nacin za rabota so pateki za fajlovi i se pristapuvso const path = require('path');

const path = require ('path');

let path1 = path.basename(__filename);//go pecati posledniot del od patekata core1.js
path1 = path.extname(__filename);//ja pecati ekstenzijata, .js
path1 = path.parse(__filename)//ja pecati celata pateka vo forma na objekt

console.log (path1)