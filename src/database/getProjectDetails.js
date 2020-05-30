import firebaseApp from "../services/firebase/firebase"
const getProjectDetails = async () => {
    const currentUserId = firebaseApp.auth().currentUser.uid;
    let ProjectDetails=[];
    await firebaseApp
        .firestore()
        .collection("projects")
        .where("user", "==", currentUserId)
        .where("active", "==", true)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                ProjectDetails.push(doc.data())
                ProjectDetails.push(doc.id)
                

            })
        })

        
    
    return ProjectDetails

}
export default getProjectDetails