import React from 'react';
import { ITestProps, ITestState } from './index';

class TestComponent extends React.Component<ITestProps, ITestState> {
    constructor(props: ITestProps) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return <>I'm the content from the test..</>;
    }
}

export default TestComponent;
