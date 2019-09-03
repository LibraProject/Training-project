let throttle = {
    idt:null
}

function throttleFn(callback){
    clearTimeout(throttle.idt)
    if(typeof(callback)==="function"){
        throttle.idt = setTimeout(()=>{
            callback()
        },500)
    }else{
        return
    }
    
}

