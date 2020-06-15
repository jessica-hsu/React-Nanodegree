import {initialData} from "./_DATA";
import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'Fandoms:decks';

export async function getDecks() {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  let json;
  if (!data) {
    json = initialData;
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(json));
  } else {
    json = JSON.parse(data);
  }
  return json;
}

export async function getDeck(title) {
  let alldecks;
  await AsyncStorage.getItem(STORAGE_KEY).then((value) => {
    let alldecks = JSON.parse(value);
    return alldecks[title];
  });
}
 
export async function saveDeckTitle(title) {
  try {
    await AsyncStorage.mergeItem(
    STORAGE_KEY, 
    JSON.stringify({
      [title]: {
        title: title,
        questions: []
      }
    })
  )
  } catch (error) {
    console.log(error);
  }
}

export async function reset() {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
}

export async function addCardToDeck(key, card) {
  await AsyncStorage.getItem(STORAGE_KEY).then((value) => {
    const alldecks = JSON.parse(value);
    let yourDeck = alldecks[key];
    yourDeck.questions.push(card);
    AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [key]: {
        title: key,
        questions: yourDeck.questions
      }
    })).then((value) => {
      getDecks();
    })
  });
}