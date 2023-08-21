import React from 'react'

const Content = () => {
    const handleNAmeChange = () =>{
        const names = ['Taleb', 'Talob', 'Talobi'];
        const num = Math.floor(Math.random() * 3);
        return names[num];
    }
    
    const handleClick = ()=>{
        console.log("AAGHH!!")
    }

    const handleClick2 = (e)=>{
        console.log(e.target.innerText)
    }

  return (
    <main>
        <p>
            Hello {handleNAmeChange()}!
        </p>
        <button onClick={handleClick}>YAMETE</button>
        <button onClick={(e)=>handleClick2(e)}>YAMETE</button>

    </main>
  )
}

export default Content