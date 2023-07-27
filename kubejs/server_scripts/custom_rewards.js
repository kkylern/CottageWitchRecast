// Credit for these scripts goes to Pie and Uncandango on the KubeJS Discord. Thank you!

// Potion Timer Quest
FTBQuestsEvents.customReward('68F9B22A32E23C71', event => {
    let player = event.entity;
    event.server.runCommandSilent(`/ftbquests change_progress ${player.profile.name} reset 491B5AE4AF9A4012`)
  })