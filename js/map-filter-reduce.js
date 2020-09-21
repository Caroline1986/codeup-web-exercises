

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 2.Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array

const lang = users.filter(user => { return user.languages.length >= 3});
console.log(lang);
// let lang = users.map(function (obj) {
//     return obj['languages']
// }).filter(function (lang) {
//     return lang.length >= 3
// });
// console.log(lang)

// //3. Use .map to create an array of strings where each element is a user's email address

const emailArr = users.map( user => user.email );
console.log(emailArr;)
// let emailArr = users.map((address) => address.email).join(",");
// console.log(emailArr)

//4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const sum = users.reduce((total, person) => total + person.yearsOfExperience, 0);//0 is the starting point
console.log(sum)

// const sum = users.reduce((total, person) => {
//     return total + person.yearsOfExperience;
// }, 0);
// console.log(sum)


// 5.Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((longest,user)=> {
    if(user.email.length > longest.length){
        return user.email;
    } else {
        return longest;
    }
}, '');
console.log(longestEmail)

// const longestEmail = users.map((user)=> user.email ).reduce((a,b)=> a.length > b.length ? a : b );
// console.log(longestEmail)

// 6.Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const everyone = users.reduce((names, user) => {
    if (names !== '') {
        names =+', ';
    }
    return names + user.name;
},'');//the empty string is the starting point

// let list = users.reduce((fullString, user, index) => {
//     if(index === 0) {
//         return user.name
//     }
//     return fullString += ", " + user.name;
// },"");
// console.log(list);

//Bonus!!Use .reduce to get the unique list of languages from the list of users

const allLanguages = users.reduce((languages, users) => {
    user.languages.forEach((language) => {
        if(!languages.includes(language)){
            languages.push(language);
        }
    });
}, []); //the empty array is the starting point which in this case.
console.log(allLanguages);