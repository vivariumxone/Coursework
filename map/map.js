async function sudrovich() {
  mapVariable = 'sudrovich';
  playchigur();
  playsid1();
  playMisuc7();
  await videoTimerRevers('сидрович');
  choiceDialog5(
    'Хабар принес?',
    'Продать',
    'расскажи что происходит сейчас',
    'й',
    'с',
    'выйти в город',
    sellShop,
    dialog1,
    '',
    '',
    city
  );
}
async function shop() {
  mapVariable = 'shop';
  playchigur();
  videoRevers('магаз');
  playMisuc13();
  choiceDialog3(
    'вас там тоже дождями залило?',
    'какими дождями?',
    'я пришел покупать',
    'обратно в город',
    chigur,
    shopBuy,
    city
  );
}
async function city() {
  mapVariable = 'city';
  playMisuc13();
  playMisuc7();
  videoRevers('город');
  playchigur();
  choiceDialog5(
    'Город',
    'выйти в пустошь',
    'сидрович',
    'заправка',
    'с',
    'я',
    desert,
    sudrovich,
    shop,
    '',
    ''
  );
}
// враги
async function desert() {
  mapVariable = 'desert';
  playMisuc12();
  playMisuc5();
  playchigur();
  playMisuc3();
  await videoTimerRevers('runDesert');
  videoRevers('dsertStop');
  video.style.loop = true;
  await choiceDialog5(
    'Что будешь делать?',
    'найти врага',
    'в город',
    '395мурино',
    'd',
    'а',
    () => pvp1(Enemy, 'ежбой'),
    city,
    boss
  );
}
async function boss() {
  mapVariable = 'boss';
  playMisuc5();
  await videoTimerRevers('395заставка');
  playMisuc12();
  videoRevers('395boss');
  video.loop = true;
  choiceDialog3(
    'что привело тебя сюда?',
    'сразиться с тобой',
    'давай сыграем в игру на ежа',
    'я пойду обратно',
    '',
    '',
    desert
  );
}
