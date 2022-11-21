function set(obj, path, value) {
    let keyPath = path.split(".");
    let KeyIndex = keyPath.length - 1;
    for (let i = 0; i < KeyIndex; ++i) {
      let key = keyPath[i];
      if ((key in obj)) {
        obj = obj[key];
      }
    }
    obj[keyPath[KeyIndex]] = value;
  }
  console.log(book.saleInfo.listPrice.amount)
  set(book,"saleInfo.listPrice.amount",60)
  console.log(book.saleInfo.listPrice.amount)