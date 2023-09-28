// Implementation of bored api to automatically generate queries.
// https://www.boredapi.com/documentation

export const baseQuery = 'http://www.boredapi.com/api/activity/';

export function random(type = '', participants = '', price = '') {

    let substring = suffix(
        {type: type},
        {participants: participants},
        {price: price}
        )

    fetch(`${baseQuery}${substring}`, {mode: 'cors'})
        .then((response) => {
            return response.json();
        }).then((response) => {
            console.log(response);
            return response;
        });
}

function suffix(...args){
    let substring = '';

    args.forEach((arg) => {
        let key = Object.keys(arg)[0];
        let value = Object.values(arg)[0];

        if(value !== '' && value !== undefined) {
            substring += `?${key}=${value}`;
        };
    });

    return substring;
}

export function getTask(){
    
}