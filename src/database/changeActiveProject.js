import firebaseApp from "../services/firebase/firebase"
const changeActiveProject = async (newActive) => {
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
                    .update({
                        active: false
                    })


            })
        })
        .then(() => {
             firebaseApp
                .firestore()
                .collection("projects")
                .where("projName", "==", newActive)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        firebaseApp
                            .firestore()
                            .collection("projects")
                            .doc(doc.id)
                            .update({
                                active: true
                            })


                    })
                })
        })
}
export default changeActiveProject