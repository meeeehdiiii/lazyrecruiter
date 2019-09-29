function do_http_call() {

//  repository = document.getElementById("#url");
//  let url = new URL('https://google.com/');
  let xhr = new XMLHttpRequest();
  //url.searchParams.set("url", repository);
  xhr.open('GET', '/google.com/');
  //xhr.responseType = 'json';
  xhr.send();

  xhr.onload = function() {
    if (xhr.status != 200) { // HTTP ошибка?
      // обработаем ошибку
      alert( 'Ошибка: ' + xhr.status);
      return;
    }
  }

  xhr.onprogress = function(event) {
    // выведем прогресс
    alert(`Загружено ${event.loaded} из ${event.total}`);
  }

  xhr.onerror = function() {
    // обработаем ошибку, не связанную с HTTP (например, нет соединения)
  }
}
