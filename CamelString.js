const convertCamelString = (string) => {
   
    let CamelString = '';

   for(let i = 0; i < string.length; i++) {
        if(i % 2 == 0) {
            CamelString += string[i].toUpperCase();
        } else {
            CamelString += string[i].toLowerCase();
        }
   }
   return CamelString;
}

// console.log(convertCamelString('Lesting dsadad dadad'));

const checkingDiv = (string) => {
    let divCounter = 0;
    let unknownFour = "";
    let fixedHTML = "";

    for(let i = 0; i < string.length; i++) {
        if(string[i] === "<") {
            for(let j = 1; j < 5; j++) {
                unknownFour += string[i + j];
            }
        }
        if(unknownFour === 'div>') {
            divCounter++;
            if(divCounter % 2 == 0) {
                fixedHTML += string[i] + "/";
                unknownFour = "";
                continue;
            } 
        }

        fixedHTML += string[i];
        unknownFour = "";
    }

    return fixedHTML;
    
}

// console.log(checkingDiv('<div><p>Here is a <div> tag</p>'));
// console.log(checkingDiv('<div><div><div>'));
// console.log(checkingDiv('<div><div><p>Hello</p><div>'));
const PromiseSum = async (promises) => {
    let sum = 0;
    promises.map(async item => {
        await item
        .then(data => {
            sum += data;
            if(sum > 40) {
                console.log('success!');
            } else {
                console.log('failed');
            }
        });
    })
    return;
}

const AllPromises = [
    Promise.resolve(3),
    Promise.resolve(6),
    Promise.resolve(8),
    Promise.resolve(10),
    Promise.resolve(15)
]

console.log(PromiseSum(AllPromises));

console.log(process.env.PUBLIC_URL+'/images');