let json = '{"name":"John", "age": 30}'; // данные с сервера

let user = JSON.parse(json); // преобразовали текстовое представление в JS-объект

// теперь user - объект со свойствами из строки
console.log( user.name ); // John
console.log( user.age );  // 30


let wrong_json = '{"incorrect json"}';
try {
  let user = JSON.parse(wrong_json);
}catch(e) {
  console.log( "Извините, в данных ошибка, мы попробуем получить их ещё раз." );
  console.log( e.name );
  console.log( e.message );  
}