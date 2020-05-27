import firebaseApp from "../services/firebase/firebase"
const newProject = (name, due, splits) => {
    const currentUserId = firebaseApp.auth().currentUser.uid
    firebaseApp.firestore().collection("projects").doc().set({
        projName: name,
        dueDate: due,
        user: currentUserId,
        splits: splits
    })
}
export default newProject