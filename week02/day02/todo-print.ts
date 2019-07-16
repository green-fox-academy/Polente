'use strict'

let todoText: string[] = ['- Buy milk'];

todoText[1] = todoText[0]
todoText[0] = "My todo:"
todoText.push("- Download games", "\t- Diablo")

todoText.forEach(function (theList) {
    console.log(theList)
});