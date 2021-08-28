// alert("working")
// let x =  localStorage.getItem('showProducts')
// alert(x)

// const products = [
//     {
//         productName: "chees",
//         productcat: "desi",
//         price: 3000,
//     },
//     {
//         productName: "pilao",
//         productcat: "pakistani",
//         price: 2400,
//     },
//     {
//         productName: "biryani",
//         productcat: "chinease",
//         price: 2700,
//     },
//     {
//         productName: "biryani",
//         productcat: "chinease",
//         price: 2700,
//     },
//     {
//         productName: "biryani",
//         productcat: "chinease",
//         price: 2700,
//     },
//     {
//         productName: "biryani",
//         productcat: "chinease",
//         price: 2700,
//     },
//     {
//         productName: "biryani",
//         productcat: "chinease",
//         price: 2700,
//     },
// ]
let resName = localStorage.getItem('showResProducts');
let Username = localStorage.getItem('Username');
let jsonAllProducts = localStorage.getItem('allProducts');
let allProducts = JSON.parse(jsonAllProducts)
let showResProducts = allProducts[resName];
let catogeray = Object.keys(showResProducts)
let Data = [];
catogeray.map((catogerayName) => {
    let item = showResProducts[catogerayName]
    for (const key in item) {
        let productName = item[key]
        Data.push(productName)
    }

})
let showProduct = document.getElementById("showProduct")
Data.map((item, key) => {
    showProduct.innerHTML += `
    <div class="showCard">
    <div class="resImg">
        <img src="../../assets/images/resturants/pexels-quark-studio-3201920.jpg"  alt="" onclick="showProductsPage()">
    </div>
    <div class="resCardBody">
        <div>
            <h1>${item.productCatogeray}</h1>
        </div>
        <div>
            <h2>${item.productName}</h2>
        </div>
        <div class="disheName">
            <span>chinease</span> <span class="price">${item.productPrice} Rs</span>
        </div>
        <div class="flex align-center justify-evenly">
        <div class="order">
        <button class="btn" onclick="orderNow('${key}')">order now</button>
        </div>
        <button class="btn">                         
                <span>
                    add to
                </span>
                <i class="fa fa-shopping-cart fa-lg"></i>
        </button>
    </div>
    </div>
</div>
    `

})
const orderNow = (key) => {
    let clickProduct=Data[key]
    clickProduct.state="pending";
    let productName=clickProduct.productName;
    console.log(clickProduct);
    console.log(productName);
    firebase.database().ref('recivedOrders').child(resName).child(Username).child(productName).set(clickProduct).then(()=>{
        alert("orderded "+ productName)
    })

}

const addToCart = (params) => {
    
}






