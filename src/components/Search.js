import React from 'react';

class Search extends React.Component {

    state = {
        term : ""
    }

    searchChange = (e) => {
        this.setState({
            term : e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        
        this.setState({
            term : ""
        })
    }

    render() {
        return (
            <div className="container">
                <form action="" style={{border : "1px solid lightgrey", padding : "20px", borderRadius : "5px"}} onSubmit={this.formSubmit}>
                    <div className="form-group">
                        <label htmlFor="search">Search for keywords</label>
                        <input 
                            type="text" 
                            name="keyword" 
                            id="search" 
                            className="form-control"
                            value = {this.state.term}
                            onChange = {this.searchChange}
                            autoFocus
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;