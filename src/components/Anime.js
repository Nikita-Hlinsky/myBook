import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Anime() {

    let [postNum, setPostNum] = useState(1)

    const handleNext = () => {
        setPostNum( postNum + 1 )
    }

    const url = `https://jsonplaceholder.typicode.com/posts/${postNum}`
    const [posts, setPosts] = useState([])
    
    let content = null

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setPosts(res.data)
                console.log(res.data)
            })

    }, [url])

    if (posts) {
        content = 
        <div>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
            
        </div>
    }

    return (
        <div>
            {content}
            <button onClick={handleNext}>next</button>


        </div>
    )
}
