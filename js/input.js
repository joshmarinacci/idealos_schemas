const TYPE_MouseDown = "MAKE_MouseDown_name"
function MAKE_MouseDown(data) {
    let obj = {}
    obj.type = TYPE_MouseDown
    if(!data.hasOwnProperty('x')) throw new Error("object 'MouseDown' is missing property 'x' ")
    if(data.x === undefined) throw new Error("object 'MouseDown has undefined property x")
    obj.x = data.x
    
    if(!data.hasOwnProperty('y')) throw new Error("object 'MouseDown' is missing property 'y' ")
    if(data.y === undefined) throw new Error("object 'MouseDown has undefined property y")
    obj.y = data.y
    
    if(!data.hasOwnProperty('app')) throw new Error("object 'MouseDown' is missing property 'app' ")
    if(data.app === undefined) throw new Error("object 'MouseDown has undefined property app")
    obj.app = data.app
    
    if(!data.hasOwnProperty('window')) throw new Error("object 'MouseDown' is missing property 'window' ")
    if(data.window === undefined) throw new Error("object 'MouseDown has undefined property window")
    obj.window = data.window
    
    return obj
}
const TYPE_MouseUp = "MAKE_MouseUp_name"
function MAKE_MouseUp(data) {
    let obj = {}
    obj.type = TYPE_MouseUp
    if(!data.hasOwnProperty('x')) throw new Error("object 'MouseUp' is missing property 'x' ")
    if(data.x === undefined) throw new Error("object 'MouseUp has undefined property x")
    obj.x = data.x
    
    if(!data.hasOwnProperty('y')) throw new Error("object 'MouseUp' is missing property 'y' ")
    if(data.y === undefined) throw new Error("object 'MouseUp has undefined property y")
    obj.y = data.y
    
    if(!data.hasOwnProperty('app')) throw new Error("object 'MouseUp' is missing property 'app' ")
    if(data.app === undefined) throw new Error("object 'MouseUp has undefined property app")
    obj.app = data.app
    
    if(!data.hasOwnProperty('window')) throw new Error("object 'MouseUp' is missing property 'window' ")
    if(data.window === undefined) throw new Error("object 'MouseUp has undefined property window")
    obj.window = data.window
    
    return obj
}
const TYPE_MouseMove = "MAKE_MouseMove_name"
function MAKE_MouseMove(data) {
    let obj = {}
    obj.type = TYPE_MouseMove
    if(!data.hasOwnProperty('x')) throw new Error("object 'MouseMove' is missing property 'x' ")
    if(data.x === undefined) throw new Error("object 'MouseMove has undefined property x")
    obj.x = data.x
    
    if(!data.hasOwnProperty('y')) throw new Error("object 'MouseMove' is missing property 'y' ")
    if(data.y === undefined) throw new Error("object 'MouseMove has undefined property y")
    obj.y = data.y
    
    if(!data.hasOwnProperty('app')) throw new Error("object 'MouseMove' is missing property 'app' ")
    if(data.app === undefined) throw new Error("object 'MouseMove has undefined property app")
    obj.app = data.app
    
    if(!data.hasOwnProperty('window')) throw new Error("object 'MouseMove' is missing property 'window' ")
    if(data.window === undefined) throw new Error("object 'MouseMove has undefined property window")
    obj.window = data.window
    
    return obj
}
const TYPE_KeyboardDown = "MAKE_KeyboardDown_name"
function MAKE_KeyboardDown(data) {
    let obj = {}
    obj.type = TYPE_KeyboardDown
    if(!data.hasOwnProperty('code')) throw new Error("object 'KeyboardDown' is missing property 'code' ")
    if(data.code === undefined) throw new Error("object 'KeyboardDown has undefined property code")
    obj.code = data.code
    
    if(!data.hasOwnProperty('key')) throw new Error("object 'KeyboardDown' is missing property 'key' ")
    if(data.key === undefined) throw new Error("object 'KeyboardDown has undefined property key")
    obj.key = data.key
    
    if(!data.hasOwnProperty('shift')) throw new Error("object 'KeyboardDown' is missing property 'shift' ")
    if(data.shift === undefined) throw new Error("object 'KeyboardDown has undefined property shift")
    obj.shift = data.shift
    
    if(!data.hasOwnProperty('control')) throw new Error("object 'KeyboardDown' is missing property 'control' ")
    if(data.control === undefined) throw new Error("object 'KeyboardDown has undefined property control")
    obj.control = data.control
    
    if(!data.hasOwnProperty('app')) throw new Error("object 'KeyboardDown' is missing property 'app' ")
    if(data.app === undefined) throw new Error("object 'KeyboardDown has undefined property app")
    obj.app = data.app
    
    if(!data.hasOwnProperty('window')) throw new Error("object 'KeyboardDown' is missing property 'window' ")
    if(data.window === undefined) throw new Error("object 'KeyboardDown has undefined property window")
    obj.window = data.window
    
    return obj
}
const TYPE_KeyboardUp = "MAKE_KeyboardUp_name"
function MAKE_KeyboardUp(data) {
    let obj = {}
    obj.type = TYPE_KeyboardUp
    if(!data.hasOwnProperty('code')) throw new Error("object 'KeyboardUp' is missing property 'code' ")
    if(data.code === undefined) throw new Error("object 'KeyboardUp has undefined property code")
    obj.code = data.code
    
    if(!data.hasOwnProperty('key')) throw new Error("object 'KeyboardUp' is missing property 'key' ")
    if(data.key === undefined) throw new Error("object 'KeyboardUp has undefined property key")
    obj.key = data.key
    
    if(!data.hasOwnProperty('shift')) throw new Error("object 'KeyboardUp' is missing property 'shift' ")
    if(data.shift === undefined) throw new Error("object 'KeyboardUp has undefined property shift")
    obj.shift = data.shift
    
    if(!data.hasOwnProperty('control')) throw new Error("object 'KeyboardUp' is missing property 'control' ")
    if(data.control === undefined) throw new Error("object 'KeyboardUp has undefined property control")
    obj.control = data.control
    
    if(!data.hasOwnProperty('app')) throw new Error("object 'KeyboardUp' is missing property 'app' ")
    if(data.app === undefined) throw new Error("object 'KeyboardUp has undefined property app")
    obj.app = data.app
    
    if(!data.hasOwnProperty('window')) throw new Error("object 'KeyboardUp' is missing property 'window' ")
    if(data.window === undefined) throw new Error("object 'KeyboardUp has undefined property window")
    obj.window = data.window
    
    return obj
}
const TYPE_Action = "MAKE_Action_name"
function MAKE_Action(data) {
    let obj = {}
    obj.type = TYPE_Action
    if(!data.hasOwnProperty('command')) throw new Error("object 'Action' is missing property 'command' ")
    if(data.command === undefined) throw new Error("object 'Action has undefined property command")
    obj.command = data.command
    
    if(!data.hasOwnProperty('app')) throw new Error("object 'Action' is missing property 'app' ")
    if(data.app === undefined) throw new Error("object 'Action has undefined property app")
    obj.app = data.app
    
    if(!data.hasOwnProperty('window')) throw new Error("object 'Action' is missing property 'window' ")
    if(data.window === undefined) throw new Error("object 'Action has undefined property window")
    obj.window = data.window
    
    return obj
}
export const INPUT = {
    MAKE_MouseDown : MAKE_MouseDown,
    TYPE_MouseDown : TYPE_MouseDown,
    MAKE_MouseUp : MAKE_MouseUp,
    TYPE_MouseUp : TYPE_MouseUp,
    MAKE_MouseMove : MAKE_MouseMove,
    TYPE_MouseMove : TYPE_MouseMove,
    MAKE_KeyboardDown : MAKE_KeyboardDown,
    TYPE_KeyboardDown : TYPE_KeyboardDown,
    MAKE_KeyboardUp : MAKE_KeyboardUp,
    TYPE_KeyboardUp : TYPE_KeyboardUp,
    MAKE_Action : MAKE_Action,
    TYPE_Action : TYPE_Action,
}