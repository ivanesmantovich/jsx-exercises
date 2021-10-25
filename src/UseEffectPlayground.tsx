import React, { FC, useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

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

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(res => res.json())
        .then(json => setPosts(json.data.children.map((child: { data: any; }) => child.data)))
    }, [subreddit, setPosts])

    return <ul className='reddit'>
        {posts.map(post => {
            return <li key={post.id}>{post.title}</li>
        })}
    </ul>
}