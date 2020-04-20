import React from 'react'

export default class BaseOptions extends React.Component {
  constructor(props) {
    super(props)
    this._options = [
      {
        label: 'Agora Video Call',
        value: 'avc',
        content: 'One to one and group calls'
      },
      {
        label: 'Agora Live',
        value: 'al',
        content: 'Enabling real-time interactions between the host and the audience'
      }
    ]
    this.state = {
      active: false,
      message: 'Agora Video Call',

    }
  }

  handleSelect = (item) => {
    let msg = item.label
    let val = item.value
    this.setState({
      'message': msg,
      'active': false
    })
    this.props.onChange(val)
  }

  render() {
    const options = this._options.map((item, index) => {
      return (
        <div className="dropdown-item"
             key={index}
             onClick={(e) => this.handleSelect(item, e)}>
          <p>{item.label}</p>
          <hr />
          <p>{item.content}</p>
        </div>
      )
    })

    return (
      <div className={this.state.active ? 'dropdown is-active' : 'dropdown'}>
        <div className="dropdown-trigger"
             onClick={() => this.setState({ 'active': !this.state.active })}>
          <a id="baseMode" className="ag-rounded button" aria-haspopup="true" aria-controls="baseModeOptions">
            <span id="baseOptionLabel">{this.state.message}</span>
            <span className="icon is-small">
              <i className="ag-icon ag-icon-arrow-down" aria-hidden="true"></i>
            </span>
          </a>
        </div>
        <div className="dropdown-menu" id="baseModeOptions" role="menu">
          <div className="dropdown-content">
            {options}
          </div>
        </div>
      </div>
    )
  }
}
