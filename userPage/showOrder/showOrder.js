
let Username = localStorage.getItem('Username');
console.log(Username);
const getOrderFirebase = () => {
    return new Promise(function (res) {
        let userAllOrder = []
        firebase.database().ref('recivedOrders').on('child_added', function (data) {
            let orders = data.val()

            const userOrder = orders[Username];
            if (userOrder == undefined) {
                res("null")
            } else {

                for (const key in userOrder) {
                    let order = userOrder[key]
                    userAllOrder.push(order)
                    res(userAllOrder)
                }
            }
        })
    })
}
let showOrderDiv = document.getElementById("showOrderDiv")
const showOrder = async () => {
    let orders = await getOrderFirebase();
    orders.map((item) => {
        console.log(item);
        showOrderDiv.innerHTML += `
        <table>
        <tr>
          <th>resturant Name</th>
          <th>catogeray</th>
          <th>product Name</th>
          <th>price</th>
          <th>status</th>
        </tr>
        <tr>
          <td>${item.productCatogeray}</td>
          <td>${item.productCatogeray}</td>
          <td>${item.productName}</td>
          <td>${item.productPrice}</td>
          <td>${item.state}</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Eve</td>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Adam</td>
          <td>Adam</td>
          <td>Adam</td>
          <td>Johnson</td>
          <td>67</td>
        </tr>
      </table>
        `

    })


}
showOrder()
