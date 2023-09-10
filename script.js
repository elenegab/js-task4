// 1.მოცემულია მასივი:
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let fillterwords = languages.filter(word => word.length > 3)
console.log(fillterwords);

// 2.შეამოწმეთ მოცელუმ მასივში let arr = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით.
let arr = [-1, -2, -3, 4].some((item) => item > 0)
console.log(arr);

// 3.Მოცემულია მასივი:
// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let filterword = words.filter( word => word.includes("m") || word.includes("M"))
console.log(filterword);

// 4.შექმენით htmlში დივი, მიანიჭეთ id და ჯსდან ამ დივში დაამატეთ შემდეგი html სტრუქტურა:
// <div class=“wraper”> 
//  <img src=“რაღაცა სურათის მისამართი დაამატეთ” alt=“image”>
// <h2 class=“title”> image title </h2>
// </div>
// const container = document.getElementById("container");
// let newDivElement = document.createElement('div');
// newDivElement.classList.add("wrapper");
// const img = document.createElement('img');
// img.src = "https://www.frommers.com/system/media_items/attachments/000/868/461/s980/Frommers-New-York-City-Getting-Around-1190x768.jpg?1647177178"
// img.alt = "image"

// const addH2 = document.createElement("h2")
// addH2.className = "title";
// addH2.textContent = "image title";
// container.appendChild(newDivElement)
// newDivElement.appendChild(img);
// newDivElement.appendChild(addH2);

// 4.მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი. ( უნდა გადაიყავნოთ მასივში, გათვალოთ ჯამი, და შემდგ ეს სტრინგი გადაიყავნოთ რიცხვში)
const numString = '12345'
let split1 = numString.split("")
console.log(split1);
let sum = 0
for (let i = 0; i < split1.length; i++){
    sum += parseInt(split1[i]);
}
console.log(sum);

// 5.მოცემულია მასივი, შემდეგი მნიშვნელობებით -let array = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11];
// გამოიტანეთ მარტო ციფრები;
let array = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11];

const filterNum = array.filter(item => typeof item === "number")
console.log(filterNum);

// 6.მოცემულია მასიცი:let array2 = [14, 150, 'css', null, 'javascript', 25];
// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.
let array2 = [14, 150, 'css', null, 'javascript', 25];
let array3 = array2.map( item => {
    if ( typeof item === 'number'){
        return item * item
    }else if( typeof item === 'string'){
        return item.toUpperCase()
    }else{
        return item
    }
})
console.log(array3);

// 7.მოცემულია სტრინგი - ‘javascript’, მიიღეთ შემოტრიალებული ვარიანტი მეთოდების გარეშე ( for loop ით)
let js = "javascript"
let jsSplit =' ';
for(let i = js.length - 1; i >= 0; i--){
    jsSplit += js[i]
}
console.log(jsSplit);

// ! 9. მოცემულია სტრინგი:, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუელებით. 
let info= 'Good day'
let nweInfo = info.slice(5,8)
console.log( nweInfo)


// ! 10. დაწერეთ ფუნქცია, რომელიც პარამეტრსდ იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

let strionfunc = (string) => {
    return string.length
}

let resultSttin = strionfunc('helo')
console.log( resultSttin)




// ! 11. Prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და 
//  შეინახეთ ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. 
//  თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.

let userAnswer = prompt('საქათველოს დედაქალაქი')
let correctAnswer = 'tbilisi'

if(userAnswer.toLowerCase() === correctAnswer) {
    alert("სწორია");
} else {
    alert("არასწორია");
}

// ! 12. მოცემულია: დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ indexof მეთოდის საშუალებით არის თუ არა 
// ამ ცვლადში “https://“. თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს.


let link = "https://google.com";

let newLink = function(link){
    if (link.indexOf("https://") !== -1) {
        return console.log("კი მოიცავს");
    }else {
        return console.log("არ მოიცავს ");
    }
}
newLink(link);


// ! 13. მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, 
// შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]  splice მეთოდის საშუალებით წაშალეთ 
// ბოლოს წინა მნიშვნელობა და მავის მავივრად ჩასვით “strawberry”. 

let fruits = ['apple', 'mango', 'avocado','kiwi']
fruits.splice(-1 -1, 1, 'strawberry')
console.log(fruit)