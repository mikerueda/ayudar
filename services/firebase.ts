import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const app =
  firebase.apps.length > 0
    ? firebase.apps[0]
    : firebase.initializeApp({
        apiKey: 'AIzaSyC4zFhJgpfRKE_ER5Tu7TTHhDJS1WeoA3Q',
        databaseURL: 'https://ayudar-9b394.firebaseio.com/'
        //storageBucket: '<your-storage-bucket>'
      })

export interface User {
  active: boolean
  avatarUrl: string
  contact: {
    address: string
    email: string
    phone: string
  }
  description: string
  name: string
  occupation: string
  paymentMethods: {
    name: string
    value: string
  }[]
  profiles: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
  received: number
  target: number
}

interface Complaint {
  description: string
  reason: string
  userDNI: string
}

const usersRef = app.database().ref('/users')
const complaintsRef = app.database().ref('/complaints')

export const registerUser = (email: string, password: string, userData: User) =>
  app
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => usersRef.push(userData))
    .catch(console.log)

export const registerComplaint = (complaint: Complaint) =>
  complaintsRef.push(complaint).catch(console.log)

export const getUsers = (callback: Function) =>
  usersRef.once('value').then(function(snapshot) {
    callback(Object.values(snapshot.val()))
  })

export default app
