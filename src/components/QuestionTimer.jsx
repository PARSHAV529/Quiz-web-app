import {useEffect,useState} from 'react'

 const QuestionTimer = ({onTimeout,timeout,mode}) => {
    let [remaingTime,setRemaingTime] =useState(timeout)

    useEffect(()=>{
        const timer=setTimeout(onTimeout,timeout)
        return()=>{
            clearTimeout(timer)
        }


    },[timeout,onTimeout])

    useEffect(()=>{
        const interval=setInterval(()=>{
            console.log("set interval")
            setRemaingTime(prevState=>prevState-100)
                },100)

                return ()=>{
clearInterval(interval)
                }
    },[])
    

  return (
    <progress id='question-time' value={remaingTime} max={timeout} className={mode}/>
  )
}

export default QuestionTimer