// // const reducer = (state, action) =>{
// //     switch(action.type){
// //         case "INCREMENTER_COUNTER":{
// //             return {
// //                 ...state,
// //                 count:state.count + action.payload
// //             }
// //         }
// //         case "DECREMENTER_COUNTER":{
// //             return {
// //                 ...state,
// //                 count:state.count - action2.payload
// //             }
// //         }
// //         default:{ 
// //             return state;
// //         }
// //     }
// // }


// // class Store{
// //     #state
// //     #reducer
// //     #listener
// //     constructor(reducer,initialState){
// //         this.#state = initialState;
// //         this.reducer = reducer;
// //         this.#listener = [];
// //     }
// //     getState(){
// //         return this.#state;
// //     }
// //     dispatch(action){
// //         this.#state = this.#reducer(this.#state,action);
// //     }
// //     subscribe(callback){
// //         const id = this.#listener.push(callback);
// //     }
// // }

// // const store = new Store(reducer,{count:1});
// // const incrementerCounter = (amount) => ({type:"INCREMENTER_COUNTER",payload:amount});
// // // const store = new Store({count:1,name:"Anamika",age:"20"});
// // // store.#state = {count:3,name:"Anamika",age:"20"}
// // const action = incrementerCounter(7);
// // // const action = {type:"INCREMENTER_COUNTER",payload:5}
// // const action2 = {type:"DECREMENTER_COUNTER",payload:5}



// // // let initState = {count:10};
// // // let a = reducer(initState,action2);
// // // console.log(a);
// // console.log(store.getState())
// // store.dispatch(action);
// // // console.log(store.getState());

// // currentState , payload/action



// const reducer = (state, action) =>{
//     switch(action.type){
//         case "INCREMENT_COUNTER":{
//             return {
//                 ...state,count: state.count + action.payload
//             }
//         }
//         case "DECREMENT_COUNTER":{
//             return{
//                 ...state,count: state.count - action.payload
//             }
//         }
//         default:{
//             return state
//         }
//     }
// }


// class Store{
//     #state
//     #reducer
//     #listener
//     constructor(reducer,initialState){
//         this.#state =initialState;
//         this.#reducer = reducer;
//         this.#listener = []
//     }
//     getState(){
//         return this.#state;
//     }
//     dispatch(action){
//         this.#state = this.#reducer(this.#state,action);
//         this.notify();
//     }
//     subscribe(callback){
//         this.#listener.push(callback);
//         const index = this.#listener.indexOf(callback);
//     }
//     #notify(){
//         for(let listener of this.#listener){
//             listener(this.#state);
//         }
//     }
// }

// const store = new Store(reducer, {count : 1})
// store.subscribe(()=>{
//     console.log("Something changed");
// })

// const incrementCounter = (amount) => ({type: "INCREMENT_COUNTER", payload: amount})
// const decrementCounter = (amount) => ({type: "DECREMENT_COUNTER", payload: amount})

// const action = incrementCounter(7);
// const action2 = decrementCounter(4);

// store.dispatch(action);
// console.log(store.getState());
// store.dispatch(action);
// console.log(store.getState());
// store.dispatch(action);
// console.log(store.getState());
// store.dispatch(action);
// console.log(store.getState());

// A simple redux basic funcationality implementaion using class method
// This program contains the following features
// You can increment counter
// You can decrement counter
// You will get an update with change in state if 
// You can subscribe Notification and also unsubscribe them


const reducer = (state, action) =>{
    // state is : currentState , action is : payload
    switch(action.type){
        case "INCREMENT_COUNTER":{
            return {
                ...state,count: state.count + action.payload
            }
        }
        case "DECREMENT_COUNTER":{
            return{
                ...state,count: state.count - action.payload
            }
        }
        default:{
            return state
        }
    }
}


class Store{
    #state
    #reducer
    #listener
    constructor(reducer,initialState){
        this.#state =initialState;
        this.#reducer = reducer;
        this.#listener = []
    }
    getState(){
        return this.#state;
    }
    dispatch(action){
        this.#state = this.#reducer(this.#state,action);
        this.#notify();
    }
    subscribe(callback){
        this.#listener.push(callback);
        const index = this.#listener.indexOf(callback);
        return ()=>{
            this.#listener = this.#listener.filter(a=>a!==callback);
        }
    }
    #notify(){
        for(let listener of this.#listener){
            listener(this.#state);
        }
    }
}

const store = new Store(reducer, {count : 1})

const incrementCounter = (amount) => ({type: "INCREMENT_COUNTER", payload: amount})
const decrementCounter = (amount) => ({type: "DECREMENT_COUNTER", payload: amount})

const action = incrementCounter(7);
const action2 = decrementCounter(4);

store.subscribe( ()=>{console.log("something has changed");}   )

const unsubscribe_three = store.subscribe(()=>{console.log("user 3 is unsubscribed");})

store.dispatch(action);
console.log(store.getState());

unsubscribe_three();

store.dispatch(action);
console.log(store.getState());

store.dispatch(action2);
console.log(store.getState());