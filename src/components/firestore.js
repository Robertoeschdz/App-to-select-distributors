import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const saveData = async (selectedHour, availableDealers, day) => {
  return await addDoc(collection(db, 'dealers'), {
    hour: selectedHour,
    availableDealers,
    day
  })
}

export const updateHours = (id, availableDealers, day) => updateDoc(doc(db, 'dealers', id), availableDealers, day)

export const getData = async () => {
  const querySnapshot = await getDocs(collection(db, 'dealers'))
  const hours = querySnapshot.docs.map(doc => (doc))
  return hours
}
