import { Component } from 'react';
import { Title } from '../components';

export default class ClassLifecycle extends Component {
  state = {
    today: new Date(),
    intervalId: null as unknown as NodeJS.Timer,
  };

  componentDidMount() {
    const duration = 1000;
    const intervalId = setInterval(() => this.setState({ today: new Date() }), duration);
    console.log('componentDidMount intervalId =', intervalId);
    this.setState({ intervalId });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount intervalId =', this.state);
    clearInterval(this.state?.intervalId);
  }

  render() {
    const today = new Date();

    return (
      <section className="mt-4">
        <Title>ClassLifecycle</Title>
        <div className="flex flex-col items-center mt-4">
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
        </div>
      </section>
    );
  }
}
