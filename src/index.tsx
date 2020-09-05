import React from 'react';

interface ITestProps {}

interface ITestState {}


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
