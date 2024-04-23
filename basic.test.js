var str = "hola";
var str2 = 'mundo!';
var num = 1;
var flag = true;

console.log(str + ' ' + str2);
console.log("num = " + num);
console.log('flag = ' + flag);


test('basic js', () => {

    expect("hola").toBe(str);
    expect("hola").toEqual(str);
  
  });