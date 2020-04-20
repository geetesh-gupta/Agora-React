import React from 'react'
import {RESOLUTION_ARR} from "../../utils/Settings";

export default class AdvancedOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  handleRadio = (e) => {
    this.props.onRadioChange(e.target.value)
  }

  handleSelect = (e) => {
    this.props.onSelectChange(e.target.value)
  }

  render() {
    const options = Object.entries(RESOLUTION_ARR).map((item, index) => {
      return (
        <option key={index} value={item[0].split(",")[0]}>{item[1][0]}x {item[1][1]}, {item[1][2]}fps, {item[1][3]}kbps</option>
      )
    })
    return (
      <div className={this.state.active ? 'dropdown is-active' : 'dropdown'}>
        <div className="dropdown-trigger"
             onClick={() => this.setState({ 'active': !this.state.active })}>
          <a id="advancedProfile" className="ag-rounded button" aria-haspopup="true" aria-controls="advancedOptions">
            <span>Advanced</span>
          </a>
        </div>
        <div className="dropdown-menu" id="advancedOptions" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <div className="control">
                <label className="radio">
                  <input value="" type="radio" name="transcode" onChange={this.handleRadio} />
                  <span>VP8-only</span>
                </label>
                <label className="radio">
                  <input value="interop" type="radio" defaultChecked onChange={this.handleRadio} name="transcode" />
                  <span>VP8 &amp; H264</span>
                </label>
                <label className="radio">
                  <input value="h264_interop" type="radio" onChange={this.handleRadio} name="transcode" />
                  <span>H264-only</span>
                </label>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="select is-rounded">
                <select onChange={this.handleSelect} defaultValue="480p_4" id="videoProfile" className="ag-rounded is-clipped">
                  {options}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
