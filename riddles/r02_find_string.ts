// 2) explain which string(s) does the 'find_string' function is searching in the array
const findLongestStrings = (str_arr: string[]) => {
  //let max = str_arr[0].length;
  let max = 0;
  str_arr.map((v) => (max = Math.max(max, v.length))); // read about the map function here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // or here https://www.w3schools.com/jsref/jsref_map.asp
  // also may need to read about arrow functions here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  // or here https://www.w3schools.com/js/js_arrow_function.asp
  // also feel free to google and research any concept using any information resource you can find
  return str_arr.filter((v) => v.length == max);
};

const foundStr = findLongestStrings([
  "aaaaaaaaa",
  "bbbbbbb",
  "cccccccccc",
  "ddddddddddd",
  "eeeeeeee",
  "ddddddddaaa",
]);

console.log(foundStr);
