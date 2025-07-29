start = document.querySelector("#start")
stop = document.querySelector("#stop")
reset = document.querySelector("#reset")

minutes = document.querySelector("#min")
seconds = document.querySelector("#sec")
milliseconds = document.querySelector("#milli")

let milli_val = 0
let sec_val = 0
let min_val = 0

start_func = () => {
    milli_int = setInterval(()=> {
        milli_val++
        if(milli_val > 99){
            milli_val =  0
        }
        let = format_val_milli = milli_val <10  ? "0" + milli_val : milli_val
        milliseconds.innerText = format_val_milli
    },10)

    sec_int = setInterval(()=> {
        sec_val++
        if(sec_val > 59){
            sec_val =  0
        }
        let = format_val_sec = sec_val <10  ? "0" + sec_val : sec_val
        seconds.innerText = format_val_sec
    },1000)

    min_int = setInterval(()=> {
        min_val++
        let = format_val_min  = min_val <10  ? "0" + min_val : min_val
        minutes.innerText = format_val_min
    },60000)
}

stop_func= () => {
    clearInterval(milli_int)
    clearInterval(sec_int)
    clearInterval(min_int)
    start.innerText = "resume"
}

reset_func = () => {
    milliseconds.innerText = "00"
    seconds.innerText = "00"
    minutes.innerText = "00"
    start.innerText = "start"
}



milli_val = 0
sec_val = 0
min_val = 0

start.addEventListener("click" , start_func)
stop.addEventListener("click" , stop_func)
reset.addEventListener("click" , reset_func)