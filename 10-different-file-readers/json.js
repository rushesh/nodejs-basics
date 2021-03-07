var rohan1 = {
    "first_name"  :  "Rohan",
    "last_name"   :  "Singh",
    "online"      :  true
}
// JSON.stringify() function converts an object to a JSON string.
console.log(JSON.stringify(rohan1))
var rohan2 = `{
    "first_name"  :  "Rohan",
    "last_name"   :  "Singh",
    "online"      :  true
}`
// JSON.parse() function converts JSON string to an object.
rohan_parse = JSON.parse(rohan2)
console.log(rohan_parse.first_name)
