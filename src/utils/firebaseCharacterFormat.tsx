import { DocumentData } from "firebase/firestore"
import { CharacterType } from "../types/CharacterType"

export function firebaseCharacterFormat(data: DocumentData) {
  const character: CharacterType = {
    characterID: data.characterID,
    playerID: data.playerID,
    characterName: data.characterName,
    background: data.background,
    gender: data.gender,
    mainClass: data.mainClass,
    subClass: data.subClass,
    species: data.species,
    appearance: data.appearance,
    backstory: data.backstory,
    personality: data.personality,
    alignment: data.alignment,
    level: data.level,
    experience: data.experience,
    armorClass: data.armorClass,
    shield: data.shield,
    hitpoints: {
      current: data.hitpoints.current,
      temp: data.hitpoints.temp,
      max: data.hitpoints.max,
      hitDice: {
        spent: data.hitpoints.hitDice.spent,
        max: data.hitpoints.hitDice.max,
        sides: data.hitpoints.hitDice.sides,
      },
      deathSaves: {
        successes: data.hitpoints.deathSaves.successes,
        failures: data.hitpoints.deathSaves.failures,
      },
    },
    languages: data.languages,
    equipment: data.equipment,
    coin: {
      copper: data.coin.copper,
      silver: data.coin.silver,
      electrum: data.coin.electrum,
      gold: data.coin.gold,
      platinum: data.coin.platinum,
    },
    proficiencyBonus: data.proficiencyBonus,
    heroicInspiration: data.heroicInspiration,
    initiative: data.initiative,
    speed: data.speed,
    size: data.size,
    passivePerception: data.passivePerception,
    attributes: {
      strength: {
        modifier: data.attributes.strength.modifier,
        score: data.attributes.strength.score,
        savingThrow: {
          proficient: data.attributes.strength.savingThrow.proficient,
          value: data.attributes.strength.savingThrow.value,
        },
        athletics: {
          proficient: data.attributes.strength.athletics.proficient,
          value: data.attributes.strength.athletics.value,
        },
      },
      dexterity: {
        modifier: data.attributes.dexterity.modifier,
        score: data.attributes.dexterity.score,
        savingThrow: {
          proficient: data.attributes.dexterity.savingThrow.proficient,
          value: data.attributes.dexterity.savingThrow.value,
        },
        acrobatics: {
          proficient: data.attributes.dexterity.acrobatics.proficient,
          value: data.attributes.dexterity.acrobatics.value,
        },
        sleightOfHand: {
          proficient: data.attributes.dexterity.sleightOfHand.proficient,
          value: data.attributes.dexterity.sleightOfHand.value,
        },
        stealth: {
          proficient: data.attributes.dexterity.stealth.proficient,
          value: data.attributes.dexterity.stealth.value,
        },
      },
      constitution: {
        modifier: data.attributes.constitution.modifier,
        score: data.attributes.constitution.score,
        savingThrow: {
          proficient: data.attributes.constitution.savingThrow.proficient,
          value: data.attributes.constitution.savingThrow.value,
        },
      },
      intelligence: {
        modifier: data.attributes.intelligence.modifier,
        score: data.attributes.intelligence.score,
        savingThrow: {
          proficient: data.attributes.intelligence.savingThrow.proficient,
          value: data.attributes.intelligence.savingThrow.value,
        },
        arcane: {
          proficient: data.attributes.intelligence.arcane.proficient,
          value: data.attributes.intelligence.arcane.value,
        },
        history: {
          proficient: data.attributes.intelligence.history.proficient,
          value: data.attributes.intelligence.history.value,
        },
        investigation: {
          proficient: data.attributes.intelligence.investigation.proficient,
          value: data.attributes.intelligence.investigation.value,
        },
        nature: {
          proficient: data.attributes.intelligence.nature.proficient,
          value: data.attributes.intelligence.nature.value,
        },
        religion: {
          proficient: data.attributes.intelligence.religion.proficient,
          value: data.attributes.intelligence.religion.value,
        },
      },
      wisdom: {
        modifier: data.attributes.wisdom.modifier,
        score: data.attributes.wisdom.score,
        savingThrow: {
          proficient: data.attributes.wisdom.savingThrow.proficient,
          value: data.attributes.wisdom.savingThrow.value,
        },
        animalHandling: {
          proficient: data.attributes.wisdom.animalHandling.proficient,
          value: data.attributes.wisdom.animalHandling.value,
        },
        insight: {
          proficient: data.attributes.wisdom.insight.proficient,
          value: data.attributes.wisdom.insight.value,
        },
        medicine: {
          proficient: data.attributes.wisdom.medicine.proficient,
          value: data.attributes.wisdom.medicine.value,
        },
        perception: {
          proficient: data.attributes.wisdom.perception.proficient,
          value: data.attributes.wisdom.perception.value,
        },
        survival: {
          proficient: data.attributes.wisdom.survival.proficient,
          value: data.attributes.wisdom.survival.value,
        },
      },
      charisma: {
        modifier: data.attributes.charisma.modifier,
        score: data.attributes.charisma.score,
        savingThrow: {
          proficient: data.attributes.charisma.savingThrow.proficient,
          value: data.attributes.charisma.savingThrow.value,
        },
        deception: {
          proficient: data.attributes.charisma.deception.proficient,
          value: data.attributes.charisma.deception.value,
        },
        intimidation: {
          proficient: data.attributes.charisma.intimidation.proficient,
          value: data.attributes.charisma.intimidation.value,
        },
        performance: {
          proficient: data.attributes.charisma.performance.proficient,
          value: data.attributes.charisma.performance.value,
        },
        persuasion: {
          proficient: data.attributes.charisma.persuasion.proficient,
          value: data.attributes.charisma.persuasion.value,
        },
      },
    },
    weaponsAndCantrips: data.weaponsAndCantrips,
    classFeatures: data.classFeatures,
    specialTraits: data.specialTraits,
    feats: data.feats,
    spellcasting: {
      ability: data.spellcasting.ability,
      modifier: data.spellcasting.modifier,
      spellsaveDc: data.spellcasting.spellsaveDc,
      attackBonus: data.spellcasting.attackBonus,
    },
    spellSlots: {
      levelOne: {
        total: data.spellSlots.levelOne.total,
        expended: data.spellSlots.levelOne.expended,
      },
      levelTwo: {
        total: data.spellSlots.levelTwo.total,
        expended: data.spellSlots.levelTwo.expended,
      },
      levelThree: {
        total: data.spellSlots.levelThree.total,
        expended: data.spellSlots.levelThree.expended,
      },
      levelFour: {
        total: data.spellSlots.levelFour.total,
        expended: data.spellSlots.levelFour.expended,
      },
      levelFive: {
        total: data.spellSlots.levelFive.total,
        expended: data.spellSlots.levelFive.expended,
      },
      levelSix: {
        total: data.spellSlots.levelSix.total,
        expended: data.spellSlots.levelSix.expended,
      },
      levelSeven: {
        total: data.spellSlots.levelSeven.total,
        expended: data.spellSlots.levelSeven.expended,
      },
      levelEight: {
        total: data.spellSlots.levelEight.total,
        expended: data.spellSlots.levelEight.expended,
      },
      levelNine: {
        total: data.spellSlots.levelNine.total,
        expended: data.spellSlots.levelNine.expended,
      },
    },
    preparedSpells: data.preparedSpells,
  }

  return character
}
