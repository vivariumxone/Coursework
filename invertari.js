function useItem(itemId) {
  const ite = items[itemId];
  switch (ite.name) {
    case 'Аптечка':
      treat(itemId);
      break;
    case 'Гитара':
      treat(itemId);
      break;
  }
}
function addToInventory(itemId, count) {
  if (!items[itemId]) {
    console.error(`Предмет "${itemId}" не существует в базе items`);
    return;
  }

  const existingItem = Player.inventory.find((i) => i.id === itemId);

  if (existingItem) {
    existingItem.count += count;
  } else {
    Player.inventory.push({ id: itemId, count });
  }
}

// функции
function treat(itemId) {
  if (itemId !== 'medkit') return;
  if (Player.health + 30 > Player.maxHealth) return;
  const slot = Player.inventory.find((item) => item.id === itemId);
  if (slot && slot.count > 0) {
    if (Player.health + 30 <= Player.maxHealth) {
      Player.health += 30;
      slot.count -= 1;
      upInterface();
      inventory();
    }
  }
}

function guitarMusic(itemId) {}
