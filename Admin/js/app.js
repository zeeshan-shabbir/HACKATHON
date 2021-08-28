document.querySelectorAll('.sidebar-submenu').forEach(e => {
    e.querySelector('.sidebar-menu-dropdown').onclick = (event) => {
        event.preventDefault()
        e.querySelector('.sidebar-menu-dropdown .dropdown-icon').classList.toggle('active')

        let dropdown_content = e.querySelector('.sidebar-menu-dropdown-content')
        let dropdown_content_lis = dropdown_content.querySelectorAll('li')

        let active_height = dropdown_content_lis[0].clientHeight * dropdown_content_lis.length

        dropdown_content.classList.toggle('active')

        dropdown_content.style.height = dropdown_content.classList.contains('active') ? active_height + 'px' : '0'
    }
})

let category_options = {
    series: [44, 55, 41, 17],
    labels: ['Cloths', 'Devices', 'Bags', 'Watches'],
    chart: {
        type: 'donut',
    },
    colors: ['#6ab04c', '#2980b9', '#f39c12', '#d35400']
}

let category_chart = new ApexCharts(document.querySelector("#category-chart"), category_options)
category_chart.render()

let customer_options = {
    series: [{
        name: "Store Customers",
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },{
        name: "Online Customers",
        data: [20, 30, 10, 20, 16, 40, 20, 51, 10]
    }],
    colors: ['#6ab04c', '#2980b9'],
    chart: {
        height: 350,
        type: 'line',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    legend: {
        position: 'top'
    }
}

let customer_chart = new ApexCharts(document.querySelector("#customer-chart"), customer_options)
customer_chart.render()

setDarkChart = (dark) => {
    let theme = {
        theme: {
            mode: dark ? 'dark' : 'light'
        }
    }

    customer_chart.updateOptions(theme)
    category_chart.updateOptions(theme)
} 

// DARK MODE TOGGLE
let darkmode_toggle = document.querySelector('#darkmode-toggle')

darkmode_toggle.onclick = (e) => {
    e.preventDefault()
    document.querySelector('body').classList.toggle('dark')
    darkmode_toggle.querySelector('.darkmode-switch').classList.toggle('active')
    setDarkChart(document.querySelector('body').classList.contains('dark'))
}

let overlay = document.querySelector('.overlay')
let sidebar = document.querySelector('.sidebar')

document.querySelector('#mobile-toggle').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}

document.querySelector('#sidebar-close').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}

function GetSelectedTextValue() {
    var dropDown = document.getElementById("dropDown");
    var selectedText = dropDown.options[dropDown.selectedIndex].innerHTML;
    var selectedValue = dropDown.value;
    return selectedValue
}
const DashBorad=()=>{
    var showContent=document.getElementById("showContent")
    showContent.innerHTML=`
    <div class="col-12">
    <div class="box">
        <div class="box-header">
            Recent orders
        </div>
        <div class="box-body overflow-scroll">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Order status</th>
                        <th>Payment status</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#2345</td>
                        <td>
                            <div class="order-owner">
                                <img src="./images/user-image.jpg" alt="user image">
                                <span>tuat tran anh</span>
                            </div>
                        </td>
                        <td>2021-05-09</td>
                        <td>
                            <span class="order-status order-ready">
                                Ready
                            </span>
                        </td>
                        <td>
                            <div class="payment-status payment-pending">
                                <div class="dot"></div>
                                <span>Pending</span>
                            </div>
                        </td>
                        <td>$123.45</td>
                    </tr>
                    <tr>
                        <td>#2345</td>
                        <td>
                            <div class="order-owner">
                                <img src="./images/user-image-2.png" alt="user image">
                                <span>John doe</span>
                            </div>
                        </td>
                        <td>2021-05-09</td>
                        <td>
                            <span class="order-status order-shipped">
                                Shipped
                            </span>
                        </td>
                        <td>
                            <div class="payment-status payment-paid">
                                <div class="dot"></div>
                                <span>Paid</span>
                            </div>
                        </td>
                        <td>$123.45</td>
                    </tr>
                    <tr>
                        <td>#2345</td>
                        <td>
                            <div class="order-owner">
                                <img src="./images/user-image-3.png" alt="user image">
                                <span>evelyn</span>
                            </div>
                        </td>
                        <td>2021-05-09</td>
                        <td>
                            <span class="order-status order-shipped">
                                Shipped
                            </span>
                        </td>
                        <td>
                            <div class="payment-status payment-paid">
                                <div class="dot"></div>
                                <span>Paid</span>
                            </div>
                        </td>
                        <td>$123.45</td>
                    </tr>
                    <tr>
                        <td>#2345</td>
                        <td>
                            <div class="order-owner">
                                <img src="./images/user-image-2.png" alt="user image">
                                <span>John doe</span>
                            </div>
                        </td>
                        <td>2021-05-09</td>
                        <td>
                            <span class="order-status order-shipped">
                                Shipped
                            </span>
                        </td>
                        <td>
                            <div class="payment-status payment-paid">
                                <div class="dot"></div>
                                <span>Paid</span>
                            </div>
                        </td>
                        <td>$123.45</td>
                    </tr>
                    <tr>
                        <td>#2345</td>
                        <td>
                            <div class="order-owner">
                                <img src="./images/user-image-3.png" alt="user image">
                                <span>evelyn</span>
                            </div>
                        </td>
                        <td>2021-05-09</td>
                        <td>
                            <span class="order-status order-shipped">
                                Shipped
                            </span>
                        </td>
                        <td>
                            <div class="payment-status payment-paid">
                                <div class="dot"></div>
                                <span>Paid</span>
                            </div>
                        </td>
                        <td>$123.45</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div> 
    `
}
const pending=()=>{
    var showContent=document.getElementById("showContent")
    showContent.innerHTML=`
    <div class="pending">
    <div class="container">
        <div class="center" >
            <h1>pending orders</h1>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Order status</th>
                        <th>Payment status</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#2345</td>
                        <td>
                            <div class="order-owner">
                                <img src="./images/user-image-2.png" alt="user image">
                                <span>John doe</span>
                            </div>
                        </td>
                        <td>2021-05-09</td>
                        <td>
                            <span class="order-status order-shipped">
                                Shipped
                            </span>
                        </td>
                        <td>
                            <div class="payment-status payment-paid">
                                <div class="dot"></div>
                                <span>Paid</span>
                            </div>
                        </td>
                        <td>$123.45</td>
                    </tr>
                    <tr>
                        <td>#2345</td>
                        <td>
                            <div class="order-owner">
                                <img src="./images/user-image-3.png" alt="user image">
                                <span>evelyn</span>
                            </div>
                        </td>
                        <td>2021-05-09</td>
                        <td>
                            <span class="order-status order-shipped">
                                Shipped
                            </span>
                        </td>
                        <td>
                            <div class="payment-status payment-paid">
                                <div class="dot"></div>
                                <span>Paid</span>
                            </div>
                        </td>
                        <td>$123.45</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
    `
}
const accept=()=>{
    var showContent=document.getElementById("showContent")
    showContent.innerHTML=`
    <div class="pending">
    <div class="container">
        <div class="center" >
            <h1>accept orders</h1>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Order status</th>
                        <th>Payment status</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#2345</td>
                        <td>
                            <div class="order-owner">
                                <img src="./images/user-image-2.png" alt="user image">
                                <span>John doe</span>
                            </div>
                        </td>
                        <td>2021-05-09</td>
                        <td>
                            <span class="order-status order-shipped">
                                Shipped
                            </span>
                        </td>
                        <td>
                            <div class="payment-status payment-paid">
                                <div class="dot"></div>
                                <span>Paid</span>
                            </div>
                        </td>
                        <td>$123.45</td>
                    </tr>
                    <tr>
                        <td>#2345</td>
                        <td>
                            <div class="order-owner">
                                <img src="./images/user-image-3.png" alt="user image">
                                <span>evelyn</span>
                            </div>
                        </td>
                        <td>2021-05-09</td>
                        <td>
                            <span class="order-status order-shipped">
                                Shipped
                            </span>
                        </td>
                        <td>
                            <div class="payment-status payment-paid">
                                <div class="dot"></div>
                                <span>Paid</span>
                            </div>
                        </td>
                        <td>$123.45</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
    `
}
const deliver=()=>{
    var showContent=document.getElementById("showContent")
    showContent.innerHTML=`
    <div class="pending">
    <div class="container">
        <div class="center" >
            <h1>deliver orders</h1>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Order status</th>
                        <th>Payment status</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#2345</td>
                        <td>
                            <div class="order-owner">
                                <img src="./images/user-image-2.png" alt="user image">
                                <span>John doe</span>
                            </div>
                        </td>
                        <td>2021-05-09</td>
                        <td>
                            <span class="order-status order-shipped">
                                Shipped
                            </span>
                        </td>
                        <td>
                            <div class="payment-status payment-paid">
                                <div class="dot"></div>
                                <span>Paid</span>
                            </div>
                        </td>
                        <td>$123.45</td>
                    </tr>
                    <tr>
                        <td>#2345</td>
                        <td>
                            <div class="order-owner">
                                <img src="./images/user-image-3.png" alt="user image">
                                <span>evelyn</span>
                            </div>
                        </td>
                        <td>2021-05-09</td>
                        <td>
                            <span class="order-status order-shipped">
                                Shipped
                            </span>
                        </td>
                        <td>
                            <div class="payment-status payment-paid">
                                <div class="dot"></div>
                                <span>Paid</span>
                            </div>
                        </td>
                        <td>$123.45</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
    `
}
const addDisheContent = () => {
    var showContent=document.getElementById("showContent")
    showContent.innerHTML=`
    <div class="addDishes">
    <form onsubmit="return false">
        <div class="itemName">
            <input type="text" name="" placeholder="item name" id="productName" required>
        </div>
        <div class="itemCatogery">
            <input type="text" placeholder="catogeray" id="productCatogeray" required>
        </div>
        <div class="itemPrice">
            <input type="number" name="" placeholder="item price" id="productPrice" required>
        </div>
        <div class="itemDeliveryCharg">
            <div class="dropdown">
                <select id="dropDown">
                    <option value="paid">paid</option>
                    <option value="free">free</option>
                </select>
            </div>
        </div>
        <div class="itemPic">
            <input type="file" placeholder="upload" id="file">
        </div>
        <div>
            <input type="submit" value="add dishes" onclick="addDishes()" required>
        </div>
    </form>
</div>
    `
    
}
const getCurrentUser = () => {
    let active=localStorage.getItem('Admin')
    let admin=JSON.parse(active)
    adminName=admin[0].resturantname
  
    // console.log(admin[0].resturantname);
  return adminName
}

const signOut = () => {
    
    alert("working")
    firebase.auth().signOut().then(() => {
        localStorage.removeItem('Admin')
        alert("success")
        window.location.replace("../../../Signup/sign.html")
    }).catch((error) => {
        // An error happened.
        alert("error")
      });
}
const addDishes = async() => {
    var productName = document.getElementById('productName').value
    var productCatogeray = document.getElementById('productCatogeray').value
    var productPrice = document.getElementById('productPrice').value
    var file = document.getElementById("file").files[0]
    var url= await imageUpload(file)  

    // : if request.auth != null
    var deliver = GetSelectedTextValue();
    let ResturantName= getCurrentUser()
    let Product = {
        productName,
        productCatogeray,
        productPrice,
        deliver,
        url,
    }
    firebase.database().ref('Products').child(ResturantName).child(productCatogeray).child(productName).set(Product)
}


const imageUpload = (file) => {
    return new Promise((res,rej)=>{
        var imageName=file.name;
        var admin=getCurrentUser()
        console.log(admin);
        var storangeRef=firebase.storage().ref("images").child(admin).child(imageName)
        var uploading=storangeRef.put(file)
        uploading.on('state_changed', 
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: 
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: 
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
          rej(error)
       
      }, 
      () => {
        uploading.snapshot.ref.getDownloadURL().then((downloadURL) => {
         res(downloadURL)
        });
      }
    );
    })
    
}

