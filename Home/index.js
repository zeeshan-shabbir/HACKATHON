


popularRest = [
    {
        resName: "kfc",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat?",
        image:"https://source.unsplash.com/1600x900/?restaurant,pizza",
    },
    {
        resName: "mcdonalds",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat?",
        image:"https://source.unsplash.com/1600x900/?restaurant,burger",
    },
    {
        resName: "johar biryani",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat?",
        image:"https://source.unsplash.com/1600x900/?restaurant,fast food",
    },
    {
        resName: "bahdurad kolfi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat?",
        image:"https://source.unsplash.com/1600x900/?restaurant,sandwich",
    },
    {
        resName: "bahdurad kolfi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat?",
        image:"https://source.unsplash.com/1600x900/?restaurant,food",
    },
    {
        resName: "bahdurad kolfi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat?",
        image:"https://source.unsplash.com/1600x900/?restaurant,fast",
    },
]



let popRest = document.getElementById("popRest")
popularRest.map((item)=>{
    popRest.innerHTML += `
    <div class="resCard flexallcenter" >
                <div class="resImg">
                    <img src="../assets/images/resturants/pexels-quark-studio-3201920.jpg"  alt="">
                </div>
                <div class="res-intro center">

                <h1 class="resName">
                    ${item.resName}
                </h1>
                <p class="resIntro">
                    ${item.description}
                </p>
                <div>
                    <a href="javascript:void(0)" onclick="alert('sign in first')" class="resLink" >
                        See resturant
                    </a>
                </div>
            </div>

            </div>
    
    `
})
