import * as React from 'react';
import * as styles from './App.css';

export default class App extends React.Component<{ children: any }, {}> {
    constructor(props) {
        super(props);
        this.state = {test: 'foo'};
    }
    render() {
        return (
            <div className={styles.app}>
        bar
        </div>
    );
    }
}