import firebaseApp from "../services/firebase/firebase"
const getProjectDetails = async () => {
    const currentUserId = firebaseApp.auth().currentUser.uid;
    let ProjectDetails = [];
    let splits = [];
    let projectId
    await firebaseApp
        .firestore()
        .collection("projects")
        .where("user", "==", currentUserId)
        .where("active", "==", true)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                ProjectDetails.push (doc.data())
                projectId = doc.id
                 
            })
        })
        .then(()=>{
            firebaseApp
                    .firestore()
                    .collection("projects")
                    .doc(projectId)
                    .collection("splits")
                    .get()
                    .then((querySnapshot) => {
                        console.log(querySnapshot)
                        querySnapshot.forEach((doc) => {
                            splits.push (doc.data())
                        })
                    })
        })
        console.log(splits)
    return ProjectDetails 

}
export default getProjectDetails