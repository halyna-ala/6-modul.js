// Проверка баланса
// Задание
// Станция по продаже ремонтных дроидов готова
//  к запуску, осталось написать программное 
//  обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) 
// выполняет транзакцию по продаже дроидов и возвращает сообщение о 
// результате операции. Она объявляет три параметра, значения которых 
// будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида;
// orderedQuantity - кол-во заказанных дроидов;
// customerCredits - сумма средств на счету клиента.
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и 
// присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, 
// запиши в переменную message строку 'Недостаточно средств на счету!';
// в противном случае, вычти сумму покупки со счёта клиента и запиши в 
// переменную message сообщение: 'Вы купили <число> дроидов, на счету 
// осталось <число> кредитов'.
// Тесты
// Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits).
// Вызов makeTransaction(3000, 5, 23000) возвращает 'Вы купили 5 дроидов, 
// на счету осталось 8000 кредитов'.
// Вызов makeTransaction(1000, 3, 15000) возвращает 'Вы купили 3 дроидов,
//  на счету осталось 12000 кредитов'.
// Вызов makeTransaction(5000, 10, 8000) возвращает 'Недостаточно средств на счету!'.
// Вызов makeTransaction(2000, 8, 10000) возвращает 'Недостаточно средств на счету!'.
// Вызов makeTransaction(500, 10, 5000) возвращает 'Вы купили 10 дроидов, на 
// счету осталось 0 кредитов'.

// !!!
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Пиши код ниже этой строки
//   if(totalPrice){
//     return pricePerDroid * orderedQuantity;
//   } else if(customerCredits < totalPrice) {
//     message = 'Недостаточно средств на счету!';
//   } else if(totalPrice - customerCredits) {
//   message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`};
//     console.log(massage);
//     // Пиши код выше этой строки
//     return message;
//   }



  function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Пиши код ниже этой строки
  const totalPrice = pricePerDroid * orderedQuantity;
   if(totalPrice > customerCredits) {
  message = 'Недостаточно средств на счету!';
  } else {
   message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`;
  }
  console.log(message);
    // Пиши код выше этой строки
    return message;
  }

  makeTransaction(3000, 5, 23000);
  makeTransaction(1000, 3, 15000);
  makeTransaction(5000, 10, 8000);
  makeTransaction(2000, 8, 10000);
  makeTransaction(500, 10, 5000);