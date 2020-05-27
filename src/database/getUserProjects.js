import firebaseApp from "../services/firebase/firebase"
const getUserProjects = async ()=>{
    const currentUserId = firebaseApp.auth().currentUser.uid;
    let userProjects=[];
    await firebaseApp.firestore().collection("projects").where("user", "==", currentUserId)
    .get()
    .then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
            userProjects.push(doc.data())
        })
    })
    return userProjects
    
}
export default getUserProjects