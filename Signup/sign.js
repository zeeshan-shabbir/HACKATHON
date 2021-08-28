


console.log(loader);
const signupPage = () => {
    var wrapper = document.getElementById("wrapper")
    wrapper.classList.remove("closesignupPage");
    wrapper.classList.add("signupPage");
}
const regPage = () => {
    var wrapper = document.getElementById("wrapper")
    wrapper.classList.add("reg");
}
const rbtn = () => {
    var wrapper = document.getElementById("wrapper")
    wrapper.classList.remove("reg");
    
}
const sbtn = () => {
    var wrapper = document.getElementById("wrapper")
    wrapper.classList.add("closesignupPage");
    wrapper.classList.remove("signupPage");
    
}


const signup = (event) => {
    loader.style.display="block"
    var Username = document.getElementById('Susername').value
    var email = document.getElementById('Suseremail').value
    var number = document.getElementById('Susernumber').value
    var country = document.getElementById('Susercountry').value
    var city = document.getElementById('Susercity').value
    var password = document.getElementById('Suserpassword').value
    var role = "User"
    let user = {
        email,
        Username,
        number,
        city,
        country,
        role,
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
            firebase.database().ref('Users').child(Username).set(user).then(()=>{
                localStorage.setItem('User', JSON.stringify(user))

                setTimeout(() => {
    
                    window.location.replace("../userPage/user.html")
                }, 3000);
            })
            alert("sucees")
        })
        .catch((error) => {
            let errorDiv = document.getElementById('Serror')
            var errorMessage = error.message;
            errorDiv.innerHTML = errorMessage;
            errorDiv.style.display = "block"
        });
        event.preventDefault()
}
const register = (event) => {
    var resturantname = document.getElementById('regname').value
    var email = document.getElementById('regemail').value
    var country = document.getElementById('regcountry').value
    var number = document.getElementById('regnumber').value
    var city = document.getElementById('regcity').value
    var password = document.getElementById('regpassword').value
    var role = "admin"
    let user = {
        email,
        resturantname,
        city,
        country,
        number,
        role,
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
            localStorage.setItem('Admin', JSON.stringify(user))
            firebase.database().ref('Admins').child(resturantname).set(user).then(()=>{
                setTimeout(() => {
    
                    window.location.replace("../Admin/Admin.html")
                }, 3000);
            })
           
            alert("sucees")
        })
        .catch((error) => {
            let errorDiv = document.getElementById('Rerror')
            var errorMessage = error.message;
            console.log(errorMessage);
            errorDiv.innerHTML = errorMessage;
            errorDiv.style.display = "block"
        });
        event.preventDefault()
}
const AdminData = () => {
    return new Promise(function (res) {
        let Data = [];
        firebase.database().ref('Admins').on('child_added', function (data) {
            Data.push(data.val())
            res(Data)

        })
    })
}
const UserData = () => {
    return new Promise(function (res) {
        let Data = [];
        firebase.database().ref('Users').on('child_added', function (data) {
            Data.push(data.val())
            res(Data)

        })
    })
}
const showLoader = () => {
    let loader = document.getElementById("loader")
    loader.style.display="block"
    
}
const hideLoader = () => {
    let loader = document.getElementById("loader")
    loader.style.display="none"
}


const login =  () => {
    showLoader()
    var userpassword = document.getElementById('userpassword').value
    var useremail = document.getElementById('useremail').value
    
    firebase.auth().signInWithEmailAndPassword(useremail, userpassword)
    .then(async() => {
            let Admins = await AdminData();
            let Users = await UserData();
            let Data = [
                ...Admins,
                ...Users,
            ]
            let active = Data.filter((user) => user.email == useremail)
            let role = active[0].role;
            if (role == "admin") {
                localStorage.setItem('Admin', JSON.stringify(active))
                setTimeout(() => {
                    window.location.replace("../Admin/Admin.html")
                }, 1500);
            } else {
                localStorage.setItem('User', JSON.stringify(active))
                setTimeout(() => {

                    window.location.replace("../userPage/user.html")
                }, 1500);
            }
        })
        .catch((error) => {
            hideLoader()
            let errorDiv = document.getElementById('error')
            var errorMessage = error.message;
            errorDiv.innerHTML = errorMessage
            errorDiv.style.display = "block"
        });

}
