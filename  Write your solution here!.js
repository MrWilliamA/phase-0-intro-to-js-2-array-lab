// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

let destructivelyAppendCat = (name) => {
    cats.push(name);
}

let destructivelyPrependCat = (name) => {
cats.unshift(name);
}

let destructivelyRemoveLastCat = () => {
cats.pop();
}

let destructivelyRemoveFirstCat = () => {
    cats.shift();
}

let appendCat = (name) => {
cats = [...cats.slice(), name];
return cats;
}

let removeLastCat = () => {
    return cats.slice(0,2);
  
}

let prependCat = (name) => {
    return cats = [name, ...cats.shift()];
}

let removeFirstCat = () => {
    let newcats = [...cats.slice(1, 3)];
       return newcats;
}shift