import React from 'react'

class Synop extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getDescription}>
                <input type="text" name="userSearchInput" />
                <button>search</button>
            </form>
        );
    }
}
export default Synop