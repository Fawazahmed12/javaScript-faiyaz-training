const bodyParser = require("body-parser");

const books = [
    {
        id: "p1v6DwAAQBAJ",
        title: "Eloquent JavaScript, 3rd Edition",
        subtitle: "A Modern Introduction to Programming",
        author: "Marijn Haverbeke",
        smallThumbnail:
            "http://books.google.com/books/content?id=p1v6DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        language: "en",
    },
    {
        id: "PXa2bby0oQ0C",
        title: "JavaScript: The Good Parts",
        subtitle: "The Good Parts",
        author: "Douglas Crockford",
        smallThumbnail:
            "http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        language: "en",
    },
    {
        id: "qU3rAgAAQBAJ",
        title: "Speaking JavaScript",
        subtitle: "An In-Depth Guide for Programmers",
        author: "Axel Rauschmayer",
        smallThumbnail:
            "http://books.google.com/books/content?id=qU3rAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        language: "en",
    },
    {
        id: "4RChxt67lvwC",
        title: "JavaScript",
        subtitle: "The Definitive Guide",
        author: "David Flanagan",
        smallThumbnail:
            "http://books.google.com/books/content?id=4RChxt67lvwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        language: "sp",
    },
    {
        id: "71nDBQAAQBAJ",
        title: "JavaScript for Kids",
        subtitle: "A Playful Introduction to Programming",
        author: "Nick Morgan",
        smallThumbnail:
            "http://books.google.com/books/content?id=71nDBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        language: "sp",
    },
    {
        id: "ptiYBAAAQBAJ",
        title: "JavaScript & jQuery: The Missing Manual",
        subtitle: "JavaScript & jQuery: The Missing Manual",
        author: "David Sawyer McFarland",
        smallThumbnail:
            "http://books.google.com/books/content?id=ptiYBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        language: "ch",
    },
    {
        id: "bzekBgAAQBAJ",
        title: "Beginning JavaScript",
        subtitle: "Beginning JavaScript",
        author: "Jeremy McPeak",
        smallThumbnail:
            "http://books.google.com/books/content?id=bzekBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        language: "ch",
    },
    {
        id: "rkRArW8H_MoC",
        title: "Testable JavaScript",
        subtitle: "Ensuring Reliable Code",
        author: "Mark Ethan Trostler",
        smallThumbnail:
            "http://books.google.com/books/content?id=rkRArW8H_MoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        language: "ch",
    },
    {
        id: "Nz9iAwAAQBAJ",
        title: "Effective JavaScript",
        subtitle: "68 Specific Ways to Harness the Power of JavaScript",
        author: "David Herman",
        smallThumbnail:
            "http://books.google.com/books/content?id=Nz9iAwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        language: "rs",
    },
    {
        id: "MhNhBgAAQBAJ",
        title: "Coding with JavaScript For Dummies",
        subtitle: "Coding with JavaScript For Dummies",
        author: "Dummies",
        smallThumbnail:
            "http://books.google.com/books/content?id=MhNhBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        language: "ag",
    },
];
//   const select=(books,lang)

// function selectLang(book, key) {
//     const output = [];
//     for (i=0;i<books.length;i++) {
//         if (books[i].language == "en") {
//             output.push(books[i])
//             
            
//         }
//     }
//     return output();
// }
// console.log(selectLang());

// const toPairs = (obj) => {
    //    let output = [];
    //    for (key in data) {
    //       output.push([key, obj[key]])
    //    }
    //    return output;
    // };
    // const data = {
    //    a: 1,
    //    b: 2,
    //    c: 3,
    // }
    // console.log(toPairs(data)) // [['a', 1], ['b', 2], ['c', 3]]

function selectLang(data,key){
        output={};
        for(key in  books){
            output[key]=books;
        }
        return output;

    }
console.log(selectLang())