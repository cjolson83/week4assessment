const database = require('./db.json')
let wishList = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Every flower blooms in its own sweet time.", "Go take a rest; you deserve it.", "No one can walk backwards into the future.", "Now is the time to try something new.", "Sift through your past to get a better idea of the present.", "You are a person of another time."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

   saveWish: (req,res) => {
        let {wish} = req.body
        wishList.push(wish)
        res.status(200).send(wishList)
    },

    getAllBirds: (req,res) => {
        res.status(200).send(database)
    },

    deleteBirdID: (req,res) => {
        let { id } = req.params
        let index = database.findIndex(birdObj => birdObj.id === +id)
        database.splice(index,1)
        res.status(200).send(database)
    },

    updateBirdCount: (req,res) => {
        let { id } = req.params
        let { type } = req.body
        let index = database.findIndex(birdObj => birdObj.id === +id)
        let birdToUpdate = database[index]
        if(type === 'minus' && birdToUpdate.count > 0){
            birdToUpdate.count--
        } else if (type === 'plus'){
            birdToUpdate.count++
        }
        res.status(200).send(database)
    }

}