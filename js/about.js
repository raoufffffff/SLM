let data = [
    {
        name: 'gust-1',
        price: 500,
        decreptions: "gust-1 Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        imgs: ['a1.png', 'a2.png', 'a3.png'],
        id: 1
    },
    {
        name: 'gust-2',
        price: 1500,
        decreptions: "gust-2 Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        imgs: ['b1.png', 'b2.png', 'b3.png', 'b4.png', 'b5.png', 'b5.png'],
        id: 2
    },
    {
        name: 'gust-3',
        price: 2500,
        decreptions: "gust-3 Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        imgs: ['o1.png', 'o2.png', 'o3.png', 'o4.png'],
        id: 3
    },
    {
        name: 'gust-4',
        price: 1000,
        decreptions: "gust-4 Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        imgs: ['or1.png', 'or2.png', 'or3.png', 'or4.png'],
        id: 4
    }
]
// replice api
let raouf = window.location.search;
raouf = raouf[4]


let about = data.filter((e) => {
    return e.id == raouf ? e : ""
})
about = about[0]
window.document.title = about.name



// mini images
let im = about.imgs
let images = im.map((e) => {
    return (
        `<img data-k="./img/${e}" class="mini-photo" src="./img/${e}" alt="photos">`
    )
}).join("")
let a = `
<div class="prodect container pt-5">
        <div class="row   justify-content-center align-items-center">
            <div class="r col-sm-12 col-md-6 pr mb-3 ">
                <img class="big-photo" src="./img/${about.imgs[0]}" alt="photos">
            </div>
            <div class="col-sm-9 col-md-6 ps-lg-5 pb-5">
                <div class="photos mb-3 to">
                    ${images}
                </div>
                <h1>${about.name}</h1>
                <h2 class="prix">${about.price} DA</h2>
                <P class="des">${about.decreptions}</P>
               <div class="photos mb-3 bo">
                    ${images}
                </div>
                <div class="mb-3 pt-3  w-100 d-flex ">
        <a class="a buy " class="fs-1" href="#">buy</a>
    </div>
            </div>
        </div>`;

document.body.innerHTML += a;



// buy form
let buy = document.querySelector(".buy");
let form = document.querySelector(".form")
let prodect = document.querySelector(".prodect")
// let pForm = document.querySelector(".pForm")
let realForm = document.querySelector(".realForm")
let input = document.querySelectorAll(".input")
let label = document.createElement("label")
let thanks = document.querySelector(".thanks")
label.className = "label"


// click on buy
buy.addEventListener("click", () => {
    form.classList.remove("deplay")
    prodect.classList.add("d-none")
    // pForm.value = `${about.name}`
})
// controler the prodect
let Sprice = document.querySelector(".Sprice")
let total = document.querySelector(".total")
let Quantity = document.querySelector(".Quantity")
Sprice.textContent = `${about.price} DA`;
console.log(Quantity.value);
total.textContent = `${about.price * Quantity.value} DA`


Quantity.addEventListener("change", () => {
    if (Quantity.value < 1) {
        Quantity.value = 1
    }
    total.textContent = `${about.price * Quantity.value} DA`

})

// form submit



realForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let submit = true
    for (let i = 0; i < input.length; i++) {
        if (!input[i].value) {
            submit = false
        }
    }
    if (submit) {
        submiting()
    }
})



// input values
input.forEach((e) => {
    e.addEventListener("focus", () => {
        label.innerHTML = `${e.dataset.m}`
        e.before(label)
    })
    e.addEventListener("blur", () => {
        label.remove()
    })
})


// chenger the main img 
let min = document.querySelectorAll(".mini-photo")
let big = document.querySelector(".big-photo")
min.forEach(e => {
    e.addEventListener("click", (e) => {
        big.src = e.target.dataset.k
    })
})

let submiting = () => {
    form.classList.add("op")
    setTimeout(() => {
        form.classList.add("d-none")
        thanks.classList.remove("d-none")
    }, 500);

}
