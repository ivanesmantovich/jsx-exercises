import React, { ReactDOM } from 'react';
import axios from 'axios';

export class Reddit extends React.Component {
	state = {
		posts: [],
		isLoading: true,
		error: null,
	};

	componentDidMount() {
		axios
			.get(`https://www.reddit.com/r/${this.props.subreddit}.json`)
			.then((res) => {
				const posts = res.data.data.children.map((obj) => obj.data);
				this.setState({ posts, isLoading: false });
			})
			.catch((error) => {
				this.setState({ error: error });
			});
	}
	render() {
		if (this.state.isLoading) return  <i className="fas fa-sync fa-spin" style={{fontSize: 50, margin: 50}}></i>;
		else {
			if (this.state.error != null) {
				return <div className="error">{`Error: ${this.state.error}`}</div>;
			}
			const { posts } = this.state;
			return (
				<div>
					<h1>{`r/${this.props.subreddit}`}</h1>
					<ul>
						{posts.map((post) => (
							<li key={post.id}>{post.title}</li>
						))}
					</ul>
				</div>
			);
		}
	}
}
