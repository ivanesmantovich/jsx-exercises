import React, { FC, useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

// export const LogEffect = () => {
// 	const [text, setText] = useState('');

// 	useEffect(() => {
// 		console.log('latest value:', text);
// 	});

// 	return <input value={text} onChange={(e) => setText(e.target.value)} />;
// };

// export const InputFocus: FC = () => {
// 	const inputRef = useRef<HTMLInputElement>(null);
// 	const [value, setValue] = useState('');

// 	useEffect(() => {
// 		if (inputRef.current !== null) {
// 			console.log('render');
// 			inputRef.current.focus();
// 		}
// 	}, [inputRef]);

// 	return (
// 		<input
// 			ref={inputRef}
// 			value={value}
// 			onChange={(event) => setValue(event.target.value)}
// 		/>
// 	);
// };

type Post = {
    id: any,
    title: string    
}

export const Reddit:FC<{subreddit: string}> = ({subreddit}) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState(false);

    // useEffect(() => {
    //     fetch(`https://www.reddit.com/r/${subreddit}.json`)
    //     .then(res => res.json())
    //     .then(json => setPosts(json.data.children.map((child: { data: any; }) => child.data)))
    // }, [subreddit, setPosts])

    useEffect(() => {
        axios.get(`https://www.reddit.com/r/${subreddit}.json`)
            .then(response => {
                setError(false);
                // @ts-ignore
                const posts = response.data.data.children.map(
                    (obj: { data: any; }) => obj.data
                )
                setPosts(posts)
            })
            .catch(error => {
                setError(error.message)
            })
    }, [subreddit, setPosts])

    return <div className={'container'}>
    { error ?
        (<p>{error}</p>)
        :
        (
            <ul className='reddit'>{posts.map(post => {
            return <li key={post.id}>{post.title}</li>
        })}</ul>
        )
    }
    </div>
}