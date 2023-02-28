import { updateHours } from './firestore'

export default function timer (data) {
  const arrayOfData = data.map(day => (day.data()))
  const today = new Date()
  const day = today.getDate()
  if (arrayOfData[0].day !== day) {
    for (let i = 0; i < arrayOfData.length; i++) {
      const id = data[i].id
      const newDealers = 8
      updateHours(id, { availableDealers: newDealers, day })
    }
  }
}
