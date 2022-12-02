const complimentBtn = document.getElementById("complimentButton")
const birdContainer = document.querySelector('#bird-container')


const birdsCallback = ({ data: birds }) => displayBirds(birds)
const errCallback = err => console.log(err.response.data)

const getAllBirds = () => axios.get("http://localhost:4000/api/birds/").then(birdsCallback).catch(errCallback)
const createBird = body => axios.post("http://localhost:4000/api/birds/", body).then(birdsCallback).catch(errCallback)
// const deleteBirdID = id => axios.delete(`${baseURL}/${id}`).then(birdsCallback).catch(errCallback)
// const updateBirdID = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(birdsCallback).catch(errCallback)


// function submitHandler(e) {
//     e.preventDefault()

//     let species = document.querySelector('#species')
//     let count = document.querySelector('#count')
//     let description = document.querySelector('#description')
//     let imageURL = document.querySelector('#img')

//     let bodyObj = {
//         species: species.value,
//         count: count.value, 
//         description: description.value,
//         imageURL: imageURL.value
//     }

//     createBirdID(bodyObj)

//     species.value = ''
//     count.value = ''
//     description.value = ''
//     imageURL.value = ''
// }


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

function createBirdID(bird) {
    const birdID = document.createElement('div')
    birdID.classList.add('bird-id')

    birdID.innerHTML = `
    <H3 class="species">${bird.species}</H3>
    <img alt='bird photo' src=${bird.imageURL} class="bird-photo"/>
    <p class="description">${bird.description}</p>
    <div class="btns-container">
        <button onclick="updateBirdCount(${bird.id}, 'minus')">-</button>
        <p class="bird-count">${bird.count} spotted</p>
        <button onclick="updateBirdCount(${bird.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteBird(${bird.id})">delete</button>
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
// form.addEventListener('submit', submitHandler)

getAllBirds()