'use strict'

let todoText: string[] = [' - Buy milk'];


todoText[1]= todoText[0]
todoText[0]="My todo:"
todoText[2]= ' - Download games'
todoText[3]= "\t- Diablo"



todoText.forEach(function(theList){

    console.log(theList)
});
