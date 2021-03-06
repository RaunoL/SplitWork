import firebaseApp from "../services/firebase/firebase"
const newProject = async (name, due, splits) => {
    const currentUserId = firebaseApp.auth().currentUser.uid
    await firebaseApp.firestore().collection("projects").doc().set({
        projName: name,
        dueDate: due,
        user: currentUserId,
        active: false
    })
        .then(() => {
            firebaseApp
                .firestore()
                .collection("projects")
                .where("user", "==", currentUserId)
                .where("projName", "==", name)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                        splits.forEach(element =>
                            firebaseApp.firestore().collection("projects").doc(doc.id).collection("splits").doc(element.id).set({
                                name : element.name,
                                due : element.due,
                                status : element.status
                            })
                        );

                    });
                })
        })
}

export default newProject