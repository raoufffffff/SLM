let data = [
    {
        name: 'gust-1',
        price: 500,
        decreptions: "gust-1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, fugiat.",
        imgs: ['a1.png', 'a2.png', 'a3.png'],
        id: 1
    },
    {
        name: 'gust-2',
        price: 1500,
        decreptions: "gust-2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, fugiat.",
        imgs: ['b1.png', 'b2.png', 'b3.png', 'b4.png', 'b5.png'],
        id: 2
    },
    {
        name: 'gust-3',
        price: 2500,
        decreptions: "gust-3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, fugiat.",
        imgs: ['o1.png', 'o2.png', 'o3.png', 'o4.png'],
        id: 3
    },
    {
        name: 'gust-4',
        price: 1000,
        decreptions: "gust-4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, fugiat.",
        imgs: ['or1.png', 'or2.png', 'or3.png', 'or4.png'],
        id: 4
    }
]


// import data from 'data';
let main = document.querySelector(".row");
window.addEventListener("DOMContentLoaded", () => {
    let prodouit = data.map((e) => {
        return (
            `<a href="about.html?id=${e.id}" data-id="${e.id}"
        class="col-lg-3 col-sm-3  col-md-6 d-flex
                                flex-column text-decoration-none  text-center pro m-lg-0 m-md-0 m-sm-0 rounded-3">
                                <div class="img h-75 rounded-3 w-100">
                        <img src="img/${e.imgs[0]}" alt="photo">
                        </div>
                    <span class="titel">${e.name}</span>
                    <span class="prix">${e.price} DA</span>
                    </a>`
        )
    }).join("")
    main.innerHTML = prodouit;
    document.querySelectorAll(".pro").forEach((e) => {
        e.addEventListener("click", () => {

            n()
        })
    })

})


let n = () => {
    main.classList.add("d")
    document.querySelector(".head").classList.add("b")
}
