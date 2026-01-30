import { Component } from 'react'

interface ClassComponentState {
}

class ClassComponent extends Component<{}, ClassComponentState> {
  constructor(props: {}) {
    super(props)
    this.state = {
    }
  }

  componentDidMount(): void {
  }

  componentDidUpdate(prevProps: {}, prevState: ClassComponentState): void {
  }

  componentWillUnmount(): void {
  }

  render() {
    return (
      <div className="component-box">
        <h2>Class Component</h2>
        <p>This component uses the class-based approach with lifecycle methods.</p>
      </div>
    )
  }
}

export default ClassComponent
