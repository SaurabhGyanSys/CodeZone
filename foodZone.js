import { LightningElement } from 'lwc';
const BOOK_URL = 'https://api.spoonacular.com'
export default class FoodZone extends LightningElement {
    query='Man'
    foods
    timer
    connectedCallback(){
        this.fetchFoodData()
    }

    fetchFoodData(){
        fetch(BOOK_URL+this.query)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            this.foods = data
        })
        .catch(error=>console.error(error))
    }
    fetchFoodsHandler(event){
        this.query = event.target.value
        window.clearTimeout(this.timer)
        this.timer= setTimeout(()=>{
            this.fetchBookData()
        }, 1000)
    }
}