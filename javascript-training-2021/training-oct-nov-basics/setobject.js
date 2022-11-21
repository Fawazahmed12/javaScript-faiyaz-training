const book = {
    "kind": "books#volume",
    "id": "UAYvDwAAQBAJ",
    "etag": "EJJo7JZjW8I",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/UAYvDwAAQBAJ",
    "volumeInfo": {
      "title": "Eloquent JavaScript",
      "subtitle": "A Modern Introduction to Programming",
      "authors": [
        "Marijn Haverbeke"
      ],
      "publisher": "No Starch Press",
      "publishedDate": "2011-01-15",
      "description": "JavaScript is at the heart of almost every modern Web application, whether it's Google Apps, Twitter, or the newest browser-based game. Though it's simple for beginners to pick up and play with, JavaScript is not a toy—it's a flexible and complex language that can be used to build full-scale applications. Eloquent JavaScript dives into this flourishing language and teaches you to write code that's beautiful and effective. By immersing you in example code and encouraging experimentation right from the start, the author quickly gives you the tools you need to build your own programs. As you follow along with examples like an artificial life simulation and a version of the classic game Sokoban, you'll learn to: –Understand the essential elements of programming: syntax, control, and data –Use object-oriented and functional programming techniques to organize and clarify your programs –Script the browser and make basic Web applications –Work with tools like regular expressions and XMLHttpRequest objects And since programming is an art that's best learned by doing, all example code is available online in an interactive sandbox for you to experiment with. With Eloquent JavaScript as your guide, you can tweak, expand, and modify the author's code, or throw it away and build your own creations from scratch. Before you know it, you'll be fluent in the language of the Web.",
      "industryIdentifiers": [
        {
          "type": "ISBN_13",
          "identifier": "9781593272937"
        },
        {
          "type": "ISBN_10",
          "identifier": "1593272936"
        }
      ],
      "readingModes": {
        "text": true,
        "image": false
      },
      "pageCount": 224,
      "printType": "BOOK",
      "categories": [
        "Computers"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": true,
      "contentVersion": "0.0.1.0.preview.2",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=UAYvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=UAYvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.co.in/books?id=UAYvDwAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=1&source=gbs_api",
      "infoLink": "https://play.google.com/store/books/details?id=UAYvDwAAQBAJ&source=gbs_api",
      "canonicalVolumeLink": "https://play.google.com/store/books/details?id=UAYvDwAAQBAJ"
    },
    "saleInfo": {
      "country": "IN",
      "saleability": "FOR_SALE",
      "isEbook": true,
      "listPrice": {
        "amount": 2110.6,
        "currencyCode": "INR"
      },
      "retailPrice": {
        "amount": 2110.6,
        "currencyCode": "INR"
      },
      "buyLink": "https://play.google.com/store/books/details?id=UAYvDwAAQBAJ&rdid=book-UAYvDwAAQBAJ&rdot=1&source=gbs_api",
      "offers": [
        {
          "finskyOfferType": 1,
          "listPrice": {
            "amountInMicros": 2110600000,
            "currencyCode": "INR"
          },
          "retailPrice": {
            "amountInMicros": 2110600000,
            "currencyCode": "INR"
          }
        }
      ]
    },
    "accessInfo": {
      "country": "IN",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": true
      },
      "pdf": {
        "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=UAYvDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "Eloquent JavaScript dives into this flourishing language and teaches you to write code that&#39;s beautiful and effective."
    }
  }
  
     
let obj={}
    function set(path, value) {
        let schema = obj;  // a moving reference to internal objects within obj
        let pList = path.split(".");
        let len = pList.length;
        for(let i = 0; i < len-1; i++) {
            let elem = pList[i];
            if( !schema[elem] ) schema[elem] = {}
            schema = schema[elem];
        }
    
        schema[pList[len-1]] = value;
    }
    
  
  console.log(book.saleInfo.listPrice.amount)
  set(book,"saleInfo.listPrice.amount",60)
  console.log(book.saleInfo.listPrice.amount)
  