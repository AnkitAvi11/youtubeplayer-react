import React, {Component} from 'react';

import Search from './components/Search';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Search />
            </div>
        )
    }
}

export default App;