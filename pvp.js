// async function pvp () {
//     return new Promise((resolve) => {
//     videoRevers('бойВид')
//     video.loop = true

// })}

async function pvp1(vrag) {
  mapVariable = 'pvp1';
  playMisuc5();
  videoRevers('ежбой');
  playMisuc3();
  video.loop = true;

  choiceDialog3(
    'Что выберешь',
    'Atak',
    'blok + Atak',
    'получить леща',
    () => moveAtak(vrag),
    () => moveAtakBlok(vrag),
    () => moveHil(vrag)
  );
  enemy(vrag);
}

function moveAtak(vrag) {
  vrag.health -= Player.damage;
  Player.health -= vrag.damage;
  playMisuc4();
  // можно радиацию кинуть отдельно либо потом не забудь универсалку сюда наклепать
  checkPvp(vrag);
}
//защита атака
function moveAtakBlok(vrag) {
  const luck = Math.floor(Math.random() * 11);
  // Функция реализует механику рискованной атаки с использованием генератора псевдослучайных чисел.
  // Вероятность исхода распределена на три сценария: критический успех (двойной урон врагу),
  // частичный успех (сниженный урон врагу + получение урона игроком) и критический провал (четверной урон по игроку)

  if (luck > 7) {
    vrag.health -= Player.damage * 2;
    console.log('1');
  }
  if (luck < 7) {
    const dmg = Math.floor((Player.damage || 0) / 2);
    vrag.health -= dmg;
    Player.health -= vrag.damage * 2;
    console.log('2');
  }
  if (luck === 7) {
    Player.health -= vrag.damage * 4;
    console.log('3');
  }
  playMisuc4();
  checkPvp(vrag);
}

function moveHil(vrag) {
  Player.health -= vrag.damage;

  checkPvp(vrag);
}

function checkPvp(vrag) {
  upInterface();

  if (Player.health <= 0) {
    return;
  }
  if (vrag.health > 0) {
    enemy(vrag);
    choiceDialog3(
      'Что выберешь',
      'Atak',
      'blok + Atak',
      'получить леща',
      () => moveAtak(vrag),
      () => moveAtakBlok(vrag),
      () => moveHil(vrag)
    );
  } else {
    addToInventory('needle', 3);
    vrag.health = vrag.maxHealth;
    clearAllDialogs();
    hideEnemy();
    desert();
  }
}

function enemy(vrag) {
  let enemyContainer = document.getElementById('enemyContainer');

  if (!enemyContainer) {
    enemyContainer = document.createElement('div');
    enemyContainer.id = 'enemyContainer';
    enemyContainer.style.cssText = `
            position: fixed;
            top: 50%;
            left: 80%;
            transform: translate(-50%, -50%);
            width: 300px;
            background: black;
            padding: 15px;
            border-radius: 5px;
            z-index: 10;
        `;

    enemyContainer.innerHTML = `
            <div style="width: 100%; height: 20px; background: gray;">
                <div id="enemyHp" style="width: 100%; height: 120%; background: red;"></div>
            </div>
        `;

    document.body.appendChild(enemyContainer);
  }

  enemyContainer.style.display = 'block';

  const enemyHp = document.getElementById('enemyHp');
  if (enemyHp) {
    const percent = Math.max(
      0,
      Math.floor((vrag.health / vrag.maxHealth) * 100)
    );
    enemyHp.style.width = `${percent}%`;
  } else {
    console.error('enemyHp элемент не найден!');
  }
}

function hideEnemy() {
  const enemyContainer = document.getElementById('enemyContainer');
  if (enemyContainer) {
    enemyContainer.style.display = 'none';
  }
}
