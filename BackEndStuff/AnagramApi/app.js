const request = require('request')

let randomWord = 'racecar'

let wordAPI = `http://www.anagramica.com/best/:${randomWord}`

let word = () => {
    request(wordAPI,(error,response) => {
        try{
        const data =JSON.parse(response.body)
        if(data.best[0].length == randomWord.length){
        console.log(true)
        console.log(data.best.toString())
        } else if(data.best[0].length < randomWord.length){
            console.log(false)
            console.log(`closest words: ${data.best[0]}`)
        } else {
            console.log(false)
        }
    } catch(e){
        console.log(false)
    }
    })
}

word()