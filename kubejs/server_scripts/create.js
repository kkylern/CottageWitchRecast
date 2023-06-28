ServerEvents.recipes(e => {
    e.recipes.create.compacting('meadow:cheese_block', [
      Fluid.of('minecraft:milk', 1000),
      'meadow:rennet'
    ]).heated()

    e.recipes.create.compacting('meadow:sheep_cheese_block', [
      'meadow:wooden_sheep_milk_bucket',
      'meadow:rennet'
    ]).heated()

    e.recipes.create.compacting('meadow:amethyst_cheese_block', [
      'meadow:wooden_amethyst_milk_bucket',
      'meadow:rennet'
    ]).heated()

    e.recipes.create.compacting('meadow:buffalo_cheese_block', [
      'meadow:wooden_buffalo_milk_bucket',
      'meadow:rennet'
    ]).heated()

    e.recipes.create.compacting('meadow:goat_cheese_block', [
      'meadow:wooden_goat_milk_bucket',
      'meadow:rennet'
    ]).heated()

    e.recipes.create.compacting('meadow:warped_cheese_block', [
      'meadow:wooden_warped_milk_bucket',
      'meadow:rennet'
    ]).heated()

  })