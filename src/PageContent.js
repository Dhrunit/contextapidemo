import React, { Component } from 'react';

class PageContent extends Component {
	render() {
		const styles = {
			backgroundColor: 'white',
			height: '100vh',
			width: '100vw',
		};
		return <div className={styles}>{this.props.children}</div>;
	}
}

export default PageContent;
