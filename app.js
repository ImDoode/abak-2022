const messages = [
  'Ваша прибыль взлетит выше самых смелых ожиданий',
  'Деньги, вложенные в развитие бизнеса, вернутся с большой прибавкой',
  'Профессионализм ваших сотрудников будет расти на глазах под вашим чутким руководством',
  'Для вашего бизнеса введут налоговые каникулы или другую поддержку государства',
  'Чиновники будут работать по вашим вопросам только в ваших интересах',
  'Различные государственные проверки пройдут в этом году мимо вас',
  'Вас ждет новый прибыльный проект',
  'График работы вашей компании будете определять только вы сами',
  'Польза ваших сотрудников для компании будет выше чем их зарплата',
  'Рекламные кампании будут удачными и привлекут много новых покупателей',
  'Постоянные клиенты будут лояльны и ни на кого вас не променяютВаша блистательная репутация будет привлекать старых и новых клиентов',
  'Новинки в вашем ассортименте привлекут большое внимание',
  'Порадуйте постоянных покупателей специальными предложениями',
  'Недовольные сотрудники уйдут сами, на их место найдутся намного лучше',
  'Новые рекламные возможности принесут хороший результат',
  'Поставщики дадут вам отличные условия',
];

const $messageContainer = document.querySelector('.js-message-container');
const $message = document.querySelector('.js-message');

const showRandomMessage = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  $message.innerHTML = message;
  $messageContainer.classList.remove('hidden');
}

const hideMessage = (event) => {
  event.stopPropagation();
  $messageContainer.classList.add('hidden');
}

window.onload = () => {
  document.querySelectorAll('.js-cookie').forEach($item =>
    $item.addEventListener('click', () => showRandomMessage())
  );
  $messageContainer.addEventListener('click', hideMessage);
  document.querySelector('.js-finish').addEventListener('click', () => {
    document.querySelector('.js-wrapper').classList.add('wrapper--finished');
  });
  document.querySelector('.js-again').addEventListener('click', () => {
    document.querySelector('.js-wrapper').classList.remove('wrapper--finished');
  });

}