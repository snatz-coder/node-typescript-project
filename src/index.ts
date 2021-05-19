/**
 * Split the `items` array into multiple, smaller arrays of the given `size`.

 */
 function chunk (items: any[], chunkSize:number) {  
    const arraySet = []
    items = [].concat(...items)

    while (items.length) {
        arraySet.push(
          items.splice(0, chunkSize)
        )
      }
    
      console.log(arraySet);
    }
    
    
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    chunk(items, 3)  
  
 
