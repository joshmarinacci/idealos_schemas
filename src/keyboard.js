import fs from 'fs'
/*const DOM_KEYCODE_TO_KEYCODE_MAP = {
    13:'ENTER',
    8:'BACKSPACE',
    16:'SHIFT',
    49:1,
    37:'LEFT',
    38:'UP',
    39:'RIGHT',
    40:'DOWN',

    32:'SPACE',

}
for(let i=48; i<=57; i++) {
    DOM_KEYCODE_TO_KEYCODE_MAP[i] = String.fromCharCode(i)
}
for(let i=65; i<=90; i++) {
    DOM_KEYCODE_TO_KEYCODE_MAP[i] = String.fromCharCode(i)
}
console.log("dom keycode map",DOM_KEYCODE_TO_KEYCODE_MAP)

// for(let i=0; i<255; i++) {
//     console.log(i,'is','"',String.fromCharCode(i),'"')
// }
*/
const KEY_NAMES = {
    "EXCLAMATION_POINT":"EXCLAMATION_POINT",
    "AT_SIGN":"AT_SIGN",
    "Enter":"Enter",
    "Backspace":"Backspace",
    "Space":"Space",
}
const DOM_KEYCODE_SET = {}
DOM_KEYCODE_SET[KEY_NAMES.EXCLAMATION_POINT]  = {key_code: 49,  shift:true, dom_key:"!", dom_code:"Digit1"}
DOM_KEYCODE_SET[KEY_NAMES.AT_SIGN]            = {key_code: 50, shift:true,  dom_key:"@", dom_code:"Digit2" }
DOM_KEYCODE_SET[KEY_NAMES.Enter]              = {key_code: 13, shift:false, dom_key:"Enter", dom_code: "Enter"}
DOM_KEYCODE_SET[KEY_NAMES.Space]              = {key_code: 32, shift:false, dom_key:"Space", dom_code: "Space"}
DOM_KEYCODE_SET[KEY_NAMES.Backspace]          = {key_code: 32, shift:false, dom_key:"Backspace", dom_code: "Backspace"}

const KEYCODE_TO_NAME = {}

for(let i=48; i<=57; i++) {
    let ch = String.fromCharCode(i)
    let name = "Digit"+ch
    KEY_NAMES[name] = name
    DOM_KEYCODE_SET[name] = { key_code:i,shift:false, dom_key:ch, dom_code:name}
}
//letters
for(let i=65; i<=90; i++) {
    let ch = String.fromCharCode(i)
    let name = "Key"+ch.toUpperCase()
    KEY_NAMES[name] = name
    DOM_KEYCODE_SET[name] = { key_code:i,shift:false, dom_key:ch, dom_code:name}
    console.log("Added",DOM_KEYCODE_SET[name])
    KEYCODE_TO_NAME[i] = []
    KEYCODE_TO_NAME[i].push({ key_code:i, shift:false, name:name, letter:ch.toLowerCase()})
    KEYCODE_TO_NAME[i].push({ key_code:i, shift:true, name:name, letter:ch.toUpperCase()})
}
console.log("Keynames",KEY_NAMES)

// Object.keys(KEY_NAMES).forEach(name => {
//     if(!DOM_KEYCODE_SET.hasOwnProperty(name)) return
    // let dom = DOM_KEYCODE_SET[name]
    // console.log(name,dom)
    // KEYCODE_TO_NAME[dom.key_code] = {
    //     key_code:dom.key_code,
    //     shift:dom.shift,
    //     name:name
    // }

// })

// console.log(DOM_KEYCODE_SET)
// console.log(KEYCODE_TO_NAME)

const obj = {
    KEY_NAMES:KEY_NAMES,
    NAME_TO_KEY:DOM_KEYCODE_SET,
    KEYCODE_TO_NAME:KEYCODE_TO_NAME,
}
fs.promises.writeFile("js/keyboard_map.json", JSON.stringify(obj,null,'   '))

/*
browser gets DOM keyboard events. turns it into semantic typing event
smenatic event doesn't have a keycode. it has a name.
textbox converts the name into an action, such as appending a character or moving the cursor
does this represent keydown, keyup, or text_input_entered?

just keydown for now.


 */
