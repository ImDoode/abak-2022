const ROOT_DIR = '' || location.origin;

const messages = [
  'Ваша прибыль взлетит выше самых смелых ожиданий',
  'Деньги, вложенные в развитие бизнеса, вернутся с большой прибавкой',
  'Для вашего бизнеса введут налоговые каникулы или другую поддержку государства',
  'Чиновники будут работать по вашим вопросам только в ваших интересах',
  'Различные государственные проверки пройдут в этом году мимо вас',
  'Вас ждет новый прибыльный проект',
  'График работы вашей компании будете определять только вы сами',
  'Польза ваших сотрудников для компании будет выше, чем их зарплата',
  'Рекламные кампании будут удачными и привлекут много новых покупателей',
  'Постоянные клиенты будут лояльны и ни на кого вас не променяют',
  'Ваша блистательная репутация будет привлекать старых и новых клиентов',
  'Новинки в вашем ассортименте привлекут большое внимание',
  'Порадуйте постоянных покупателей специальными предложениями',
  'Недовольные сотрудники уйдут сами, на их место найдутся намного лучше',
  'Новые рекламные возможности принесут хороший результат',
  'Поставщики дадут вам отличные условия',
  'Профессионализм ваших сотрудников будет расти на глазах под вашим чутким руководством',
];

const $messageContainer = document.querySelector('.js-message-container');
const $message = document.querySelector('.js-message');
const $finish = document.querySelector('.js-finish');
const $again = document.querySelector('.js-again');
const $socialFb = document.querySelector('.js-social-fb');
const $socialVk = document.querySelector('.js-social-vk');
let shareImage = '';


const getSocialLinkVk = () => `http://vk.com/share.php?url=${location.href}&title=${encodeURIComponent('Печенье с предсказаниями от BLIZKO - с Новым годом!')}&image=${ROOT_DIR}${shareImage}`;
const getSocialLinkFb = () => `http://www.facebook.com/sharer.php?u=${location.href}`;
const updateSocialLinks = () => {
  $socialFb.href = getSocialLinkFb();
  $socialVk.href = getSocialLinkVk();
}
             
const setShareImage = (img = 'main') => {
  shareImage = `/share/${img}.jpg`;
  updateSocialLinks();
}


const showRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length)
  const message = messages[randomIndex];
  setShareImage(randomIndex + 1);
  $message.innerHTML = message;
  $messageContainer.classList.remove('hidden');
}

const hideMessage = (event) => {
  event && event.stopPropagation();
  $messageContainer.classList.add('hidden');
}

window.onload = () => {
  setShareImage();
  document.querySelectorAll('.js-cookie').forEach($item =>
    $item.addEventListener('click', () => showRandomMessage())
  );
  $messageContainer.addEventListener('click', hideMessage);
  $finish.addEventListener('click', () => {
    document.querySelector('.js-wrapper').classList.add('wrapper--finished');
    $finish.classList.add('dn');
    $again.classList.remove('dn');
    hideMessage();
    setShareImage('finish');
    
  });
  $again.addEventListener('click', () => {
    document.querySelector('.js-wrapper').classList.remove('wrapper--finished');
    $finish.classList.remove('dn');
    $again.classList.add('dn');
    hideMessage();
    setShareImage('main');
  });

}