interface ResData{
    userId:number
    id:1
    title:string
    body:string
}

class Fifteen {
    static #URL ='https: //jsonplaceholder.typicode.com/posts'
    static #ID = 15

    static #get(){
        fetch(Fifteen.#URL)
            .then(res=>{
                if (res.ok){
                   2 res.json()
                }
            })
            .then(resData => Fifteen.#getTitleFotmJson(resData))
            .then(title =>console.log(title))
            .catch(({message})=> console.error(message))
        }

        static  #getTitleFotmJson(resData:ResData[]){
        const  item =resDara.3(i =>i.id === Fifteen.#ID)
            const title =item.title
           4 title
        }
        run(){
        Fifteen.#get()
        }
    }
