import fs from 'fs'

/*
browser client needs to map a dom keycode and shift to a key name and the char this key would produce
some dom keycodes produce different chars depending on shift or not.
some keycodes dont' produce characters at all. instead they just have a name, like arrowright and backspace

the apps should be able to tell if the event will produce a letter or some other behavior


kb.code / msg.dom_code = physical key that was pressed regardless of keyboard layout, string like KeyZ or ArrowLeft
shift, alt, ctrl, meta, represent if that modifier key was down
kb.key / msg.dom_key = the key value of the key. the ltter that would be produced. like z or Z or 1 or !
kbd.location / ?? = the location of the key on the keybaord. ex: STANDARD | LEFT | RIGHT | NUMPAD

 */
const KEY_NAMES = {
    "Enter":"Enter",
    "Backspace":"Backspace",
    "Space":"Space",
    "LeftShift":"LeftShift",
    "RightShift":"RightShift",
}
const TYPES = { CHAR:"CHAR", NON_PRINTING:"CONTROL"}
const DOM_CODES = {}
function insert_dom(name, char, type) {
    if(!KEY_NAMES[name]) KEY_NAMES[name] = name
    if(!DOM_CODES[name]) DOM_CODES[name] = []
    DOM_CODES[name].push({code:name, key:char, type:type})
}

//numbers
for(let i=48; i<=57; i++) {
    let ch = String.fromCharCode(i)
    let name = "Digit"+ch
    insert_dom(name, ch, TYPES.CHAR)
    const kb_symbols = [')','!','@','#','$','%','^','&','*','(']
    insert_dom(name, kb_symbols[i-48], TYPES.CHAR)
    insert_dom("Numpad"+ch,ch,TYPES.CHAR)

}
//letters
for(let i=65; i<=90; i++) {
    let ch = String.fromCharCode(i)
    let name = "Key"+ch.toUpperCase()
    insert_dom(name,ch.toUpperCase(), TYPES.CHAR)
    insert_dom(name,ch.toLowerCase(), TYPES.CHAR)

}

// DOM_CODES[KEY_NAMES.Enter]              = [{code: KEY_NAMES.Enter, key:"Enter"}]
// DOM_CODES[KEY_NAMES.Space]              = [{code: KEY_NAMES.Space, key: " "}]
// DOM_CODES[KEY_NAMES.Backspace]          = [{code: KEY_NAMES.Backspace, key:KEY_NAMES.Backspace}]
//
insert_dom("Space","Space",TYPES.CHAR)
insert_dom("Comma",",",TYPES.CHAR)
insert_dom("Comma","<",TYPES.CHAR)
insert_dom("Period",".",TYPES.CHAR)
insert_dom("Period",">",TYPES.CHAR)
insert_dom("Slash","/",TYPES.CHAR)
insert_dom("Slash","?",TYPES.CHAR)
insert_dom("Backslash","\\",TYPES.CHAR)
insert_dom("Backslash","|",TYPES.CHAR)
insert_dom("Semicolon",";",TYPES.CHAR)
insert_dom("Semicolon",":",TYPES.CHAR)
insert_dom("Quote","'",TYPES.CHAR)
insert_dom("Quote","\"",TYPES.CHAR)
insert_dom("Backquote","`",TYPES.CHAR)
insert_dom("Backquote","~",TYPES.CHAR)

insert_dom("BracketLeft","[",TYPES.CHAR)
insert_dom("BracketLeft","{",TYPES.CHAR)
insert_dom("BracketRight","]",TYPES.CHAR)
insert_dom("BracketRight","}",TYPES.CHAR)

insert_dom("Minus","-",TYPES.CHAR)
insert_dom("Minus","_",TYPES.CHAR)
insert_dom("Equal","=",TYPES.CHAR)
insert_dom("Equal","+",TYPES.CHAR)

insert_dom("LeftShift","Shift",TYPES.NON_PRINTING)
insert_dom("RightShift","Shift",TYPES.NON_PRINTING)
insert_dom("Enter","Enter",TYPES.NON_PRINTING)
insert_dom("Backspace","Backspace",TYPES.NON_PRINTING)
insert_dom("ControlRight", "Control", TYPES.NON_PRINTING)
insert_dom("ArrowLeft", "ArrowLeft", TYPES.NON_PRINTING)
insert_dom("ArrowRight", "ArrowRight", TYPES.NON_PRINTING)
insert_dom("ArrowUp", "ArrowDown", TYPES.NON_PRINTING)
insert_dom("ArrowUp", "ArrowDown", TYPES.NON_PRINTING)

insert_dom("NumpadEnter","Enter",TYPES.NON_PRINTING)
insert_dom("NumpadEqual","=",TYPES.CHAR)
insert_dom("NumpadAdd","+",TYPES.CHAR)
insert_dom("NumpadSubtract","-",TYPES.CHAR)
insert_dom("NumpadDivide","/",TYPES.CHAR)
insert_dom("NumpadMultiply","*",TYPES.CHAR)
insert_dom("NumLock","Clear",TYPES.NON_PRINTING)

// KEYCODE_TO_NAME[8] = {key_code:8, shift:false, name:KEY_NAMES.Backspace, letter:"" }
console.log("Keynames",KEY_NAMES)
console.log("dom",DOM_CODES)

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
    NAME_TO_KEY:DOM_CODES,
}
fs.promises.writeFile("js/keyboard_map.json", JSON.stringify(obj,null,'   '))
fs.promises.writeFile("js/keyboard_map.js", `export const INFO = ${JSON.stringify(obj,null,'   ')}`)

/*
browser gets DOM keyboard events. turns it into semantic typing event
smenatic event doesn't have a keycode. it has a name.
textbox converts the name into an action, such as appending a character or moving the cursor
does this represent keydown, keyup, or text_input_entered?

just keydown for now.


 */
