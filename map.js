function checkMap() {
    Player.map.apply()
}

async function desert() {
    
await videoTimerRevers('runDesert')
videoRevers('dsertStop')
video.style.loop = true
await choiceDialog5('Что будешь делать?', 'найти врага', 'у', 'd', 'd', 'а', () => pvp1(Enemy))

}