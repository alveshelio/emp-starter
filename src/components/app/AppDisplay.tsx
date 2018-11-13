import * as React from "react"

interface StateToProps {
  firstName: string
}

interface DispatchToProps {
  changeFirstName: (firstName: string) => void
}

type AppProps = StateToProps & DispatchToProps

class AppDisplay extends React.Component<AppProps> {
  state = {
    value: "",
  }

  onChangeHandler = (e: any) => {
    const { value } = e.target
    this.setState(() => ({ value }))
  }

  onKeyPressHandler = (e: any) => {
    if (e.key === "Enter") {
      this.props.changeFirstName(e.target.value)
    }
  }

  render() {
    return (
      <div>
        <h1>App running</h1>
        <input
          type="text"
          onChange={this.onChangeHandler}
          value={this.state.value}
          onKeyPress={this.onKeyPressHandler}
        />
        <p>Name: {this.props.firstName}</p>
      </div>
    )
  }
}

export default AppDisplay
