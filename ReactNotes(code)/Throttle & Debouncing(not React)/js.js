const goTo = (func,time)=>{
   
    return (...args)=>{
    func(args)
    }
}

const hell = (num)=>{
    console.log(num)
}

const go = goTo(hell,1000)


go("2","5","hello")
