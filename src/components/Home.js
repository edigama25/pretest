import React from 'react'

export default function Home(props) {
    
    const show = ()=>{
        if(props.check == true)
        return (props.posts.map(element=>{
            return <h6>{element.body}</h6>
        }))
      
    }
    
    return (
        <div>
            {show()}
        </div>
    )
}