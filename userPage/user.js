

// let Data = [
//     {
//         resName: "kfc",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat?",
//         image:"https://source.unsplash.com/1600x900/?restaurant,pizza",
//     },
//     {
//         resName: "mcdonalds",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat?",
//         image:"https://source.unsplash.com/1600x900/?restaurant,burger",
//     },
//     {
//         resName: "johar biryani",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat?",
//         image:"https://source.unsplash.com/1600x900/?restaurant,fast food",
//     },
//     {
//         resName: "bahdurad kolfi",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat?",
//         image:"https://source.unsplash.com/1600x900/?restaurant,sandwich",
//     },
//     {
//         resName: "bahdurad kolfi",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat?",
//         image:"https://source.unsplash.com/1600x900/?restaurant,food",
//     },
//     {
//         resName: "bahdurad kolfi",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat?",
//         image:"https://source.unsplash.com/1600x900/?restaurant,fast",
//     },
// ]

const signOut = () => {
    firebase.auth().signOut().then(() => {
        localStorage.removeItem('User')
        alert("success")
        window.location.replace("../../../Signup/sign.html")
    }).catch((error) => {
        alert("error")
      });
}
const allRestName = () => {
    let allProducts=localStorage.getItem('allProducts');
    let allRestName = Object.keys(JSON.parse(allProducts))
    return allRestName;
    
}
const currentUser = () => {
    let User=localStorage.getItem('User');
    let currentUser =JSON.parse(User)[0]
    localStorage.setItem('Username',currentUser.Username)
    
}
currentUser()

const allProducts = () => {
    firebase.database().ref('Products').on('value', function (data) {
        let allProducts = data.val()
        localStorage.setItem('allProducts', JSON.stringify(allProducts))
        console.log(allProducts);
        // let allRestName = Object.keys(allProducts)
        
    })
    
}
allProducts()
let Data=allRestName()



const showProductsPage = (resName) => {
    localStorage.setItem('showResProducts', resName)
    alert("working")
    window.location="./ShowProductcs/showProduct.html"
    
}

const showData = () => {
    let showResturant = document.getElementById("showResturant")
    Data.map((resName) => {
        showResturant.innerHTML += `
        <div class="resCard flexallcenter" onclick="showProductsPage('${resName}')" >
        <div class="resImg">
            <img src="../assets/images/resturants/pexels-quark-studio-3201920.jpg"  alt="">
        </div>
        <div class="res-intro center">

        <h1 class="resName">
            ${resName}
        </h1>
    </div>

    </div>
        `
    })
}

showData()




