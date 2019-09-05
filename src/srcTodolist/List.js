import React, {Component} from 'react';
import PropTypes from 'prop-types';

class List extends Component {
	
	
	handleRemove = (index) => {
		this.props.onRemove(index);
	}
	
	render(){
		return (
		<ul>
		{this.props.items.map((item, index) => (
			<li key={index}>
				{item}
				<button className="delete" onClick={() => this.handleRemove(index)}/>
			</li>
		))}
		</ul>
	  )
	}

}

List.propTypes = {
	items: PropTypes.arrayOf(PropTypes.node),
	onRemove: PropTypes.func
};

export default List;