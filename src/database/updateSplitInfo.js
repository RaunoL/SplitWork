import firebaseApp from "../services/firebase/firebase"
const updateSplitInfo = async (name, due, id, status) => {
    const currentUserId = firebaseApp.auth().currentUser.uid;
    await firebaseApp
        .firestore()
        .collection("projects")
        .where("user", "==", currentUserId)
        .where("active", "==", true)
        .get()
        .then((querySnapshot) => {

            querySnapshot.forEach((doc) => {              
                 firebaseApp
                    .firestore()
                    .collection("projects")
                    .doc(doc.id)
                    .collection("splits")
                    .doc(id)
                    .update({
                       due: due,
                       name: name,
                       status: status
                    })
                
            })
        })
}
export default updateSplitInfo