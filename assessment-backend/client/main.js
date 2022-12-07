const complimentBtn = document.getElementById("complimentButton")
const birdContainer = document.querySelector('#bird-container')
const form = document.querySelector('form')
const wishInput = document.querySelector('#wish-input')
const list = document.querySelector('ul')

const birdsCallback = ({ data: birds }) => displayBirds(birds)
const errCallback = err => console.log(err)
const getAllBirds = () => axios.get(baseURL).then(birdsCallback).catch(errCallback)
const deleteBirdID = id => axios.delete(`${baseURL}/${id}`).then(birdsCallback).catch(errCallback)
const updateBirdCount = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(birdsCallback).catch(errCallback)

const baseURL = 'http://localhost:4000/api/birds'

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const saveWish = evt => {
    evt.preventDefault()
    clearList()
    axios.post("http://localhost:4000/api/wish/", {wish: wishInput.value})
    .then(response => {
        let {data} = response
        data.forEach((wish, index) => {
            let listItem = document.createElement('li')
            let wishSpan = document.createElement('span')

            listItem.appendChild(wishSpan)

            wishSpan.textContent = wish

            list.appendChild(listItem)
        })
        wishInput.value = ''
    })
    .catch(err => console.log(err))
};

const clearList = () => {
    list.innerHTML = ''
}

function createBirdID(bird) {
    const birdID = document.createElement('div')
    birdID.classList.add('bird-id')

    birdID.innerHTML = `
    <H3 class="species">${bird.species}</H3>
    <img id='bird photo' src=${bird.imageURL} class="bird-photo"/>
    <p class="description">${bird.description}</p>
    <div class="btns-container">
        <button onclick="updateBirdCount(${bird.id},'minus')">-</button>
        <p class="bird-count">${bird.count} ${bird.species}s spotted</p>
        <button onclick="updateBirdCount(${bird.id},'plus')">+</button>
        </div>
    <button onclick="deleteBirdID(${bird.id})">delete</button>
    `

    birdContainer.appendChild(birdID)
};

function displayBirds(arr) {
    birdContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createBirdID(arr[i])
    }
}


complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener('click', getFortune)
form.addEventListener('submit', saveWish)

getAllBirds()