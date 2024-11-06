export interface SaveAndAbilityCheckType {
  proficient: boolean
  value: number
}

export interface PreparedSpellsType {
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  name: string
  castingTime: number
  range: number
  concentration: boolean
  ritual: boolean
  requireMaterial: boolean
  notes: string[]
}

export interface WeaponOrCantripType {
  name: string
  attackBonus?: number
  difficultyClass?: number
  damage: {
    diceNumber: number
    diceSides: number
    type:
      | 'acid'
      | 'bludgeoning'
      | 'cold'
      | 'fire'
      | 'force'
      | 'lightning'
      | 'necrotic'
      | 'piercing'
      | 'poison'
      | 'psychic'
      | 'radiant'
      | 'slashing'
      | 'thunder'
  }
}

export interface CharacterType {
  characterID: string
  playerID: string
  characterName: string
  background:
    | 'acolyte'
    | 'artisan'
    | 'charlatan'
    | 'criminal'
    | 'entertainer'
    | 'farmer'
    | 'guard'
    | 'guide'
    | 'hermit'
    | 'merchant'
    | 'noble'
    | 'sage'
    | 'sailor'
    | 'scribe'
    | 'soldier'
    | 'wayfarer'
  gender: 'm' | 'f' | undefined
  mainClass:
    | 'barbarian'
    | 'bard'
    | 'cleric'
    | 'druid'
    | 'fighter'
    | 'monk'
    | 'paladin'
    | 'ranger'
    | 'rogue'
    | 'sorcerer'
    | 'warlock'
    | 'wizard'
  subClass:
    | 'Path of Berzerker'
    | 'Path of the Wild Heart'
    | 'Path of the World Tree'
    | 'Path of the Zealot'
    | 'College of Dance'
    | 'College of Glamour'
    | 'College of Lore'
    | 'College of Valor'
    | 'Life Domain'
    | 'Light Domain'
    | 'Trickery Domain'
    | 'War Domain'
    | 'Circle of the Land'
    | 'Circle of the Moon'
    | 'Circle of the Sea'
    | 'Circle of the Stars'
    | 'Battlemaster'
    | 'Champion'
    | 'Eldrith Knight'
    | 'Psi Warrior'
    | 'Warrior of Mercy'
    | 'Warrior of Shadow'
    | 'Warrior of the Elements'
    | 'Warrior of the Open Hand'
    | 'Oath of Devotion'
    | 'Oath of Glory'
    | 'Oath of the Ancients'
    | 'Oath of Vengeance'
    | 'Beast Master'
    | 'Fey Wanderer'
    | 'GLoom Stalker'
    | 'Hunter'
    | 'Arcane Trickster'
    | 'Assassin'
    | 'Soulknife'
    | 'Thief'
    | 'Aberrant Sorcery'
    | 'Clockwork Sorcery'
    | 'Draconic Sorcery'
    | 'Wild Magic Sorcery'
    | 'Archfey Patron'
    | 'Celestial Patron'
    | 'Fiend Patron'
    | 'Great Old One Patron'
    | 'Abjurer'
    | 'Diviner'
    | 'Evoker'
    | 'Illusionist'
  species:
    | 'Aasimar'
    | 'Dragonborn'
    | 'Dwarf'
    | 'Elf'
    | 'Gnome'
    | 'Goliath'
    | 'Halfling'
    | 'Human'
    | 'Orc'
    | 'Tiefling'
  appearance: string
  backstory: string
  personality: string
  alignment:
    | 'lawful-good'
    | 'lawful-neutral'
    | 'lawful-evil'
    | 'neutral-good'
    | 'true neutral'
    | 'neutral-evil'
    | 'chaotic-good'
    | 'chaotic-neutral'
    | 'chaotic-evil'
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
  experience: number
  armorClass: number
  shield: boolean
  hitpoints: {
    current: number
    temp: number
    max: number
    hitDice: {
      spent: number
      max: number
      sides: 6 | 8 | 10 | 12
    }
    deathSaves: {
      successes: 0 | 1 | 2 | 3
      failures: 0 | 1 | 2 | 3
    }
  }
  languages:
    | 'Common'
    | 'Common Sign Language'
    | 'Draconic'
    | 'Dwarvish'
    | 'Elvish'
    | 'Giant'
    | 'Gnomish'
    | 'Goblin'
    | 'Halfling'
    | 'Orc'
  equipment: string[]
  coin: {
    copper: number
    silver: number
    electrum: number
    gold: number
    platinum: number
  }
  proficiencyBonus: number
  heroicInspiration: number
  initiative: number
  speed: number
  size: 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'gargantuan'
  passivePerception: number
  attributes: {
    strength: {
      modifier: number
      score: number
      savingThrow: SaveAndAbilityCheckType
      athletics: SaveAndAbilityCheckType
    }
    dexterity: {
      modifier: number
      score: number
      savingThrow: SaveAndAbilityCheckType
      acrobatics: SaveAndAbilityCheckType
      sleightOfHand: SaveAndAbilityCheckType
      stealth: SaveAndAbilityCheckType
    }
    constitution: {
      modifier: number
      score: number
      savingThrow: SaveAndAbilityCheckType
    }
    intelligence: {
      modifier: number
      score: number
      savingThrow: SaveAndAbilityCheckType
      arcane: SaveAndAbilityCheckType
      history: SaveAndAbilityCheckType
      investigation: SaveAndAbilityCheckType
      nature: SaveAndAbilityCheckType
      religion: SaveAndAbilityCheckType
    }
    wisdom: {
      modifier: number
      score: number
      savingThrow: SaveAndAbilityCheckType
      animalHandling: SaveAndAbilityCheckType
      insight: SaveAndAbilityCheckType
      medicine: SaveAndAbilityCheckType
      perception: SaveAndAbilityCheckType
      survival: SaveAndAbilityCheckType
    }
    charisma: {
      modifier: number
      score: number
      savingThrow: SaveAndAbilityCheckType
      deception: SaveAndAbilityCheckType
      intimidation: SaveAndAbilityCheckType
      performance: SaveAndAbilityCheckType
      persuasion: SaveAndAbilityCheckType
    }
  }
  weaponsAndCantrips: WeaponOrCantripType[]
  classFeatures: string[]
  specialTraits: string[]
  feats: string[]
  spellcasting: {
    ability: 'intelligence' | 'wisdom' | 'charisma' | 'none'
    modifier: number
    spellsaveDc: number
    attackBonus: number
  }
  spellSlots: {
    levelOne: {
      total: number
      expended: 0 | 1 | 2 | 3 | 4
    }
    levelTwo: {
      total: number
      expended: 0 | 1 | 2 | 3
    }
    levelThree: {
      total: number
      expended: 0 | 1 | 2 | 3
    }
    levelFour: {
      total: number
      expended: 0 | 1 | 2 | 3
    }
    levelFive: {
      total: number
      expended: 0 | 1 | 2 | 3
    }
    levelSix: {
      total: number
      expended: 0 | 1 | 2
    }
    levelSeven: {
      total: number
      expended: 0 | 1 | 2
    }
    levelEight: {
      total: number
      expended: 0 | 1
    }
    levelNine: {
      total: number
      expended: 0 | 1
    }
  }
  preparedSpells: PreparedSpellsType[]
}
