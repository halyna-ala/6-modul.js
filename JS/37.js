const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
  const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author));
  console.log(sortedByAuthorName);

  const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author));
  console.log(sortedByReversedAuthorName);
  
  const sortedByAscendingRating = [...books].sort((firstRating, secondRating) => firstRating.rating - secondRating.rating);
  console.log(sortedByAscendingRating);

  const sortedByDescentingRating = [...books].sort((firstRating, secondRating) => secondRating.rating - firstRating.rating);
console.log(sortedByDescentingRating);




// Сортировка объектов
// При работе с массивом объектов сортировка выполняется по числовому или строчному значению
//  какого-то свойства. Например, есть группа студентов с баллами за тест. Необходимо 
// отсортировать массив объектов по возрастанию и убыванию количества баллов, и по имени студента.

// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в
//  алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени 
// автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по
//  возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.


  