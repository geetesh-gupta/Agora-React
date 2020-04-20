import React from 'react'
import * as Cookies from 'js-cookie'

import '../../assets/fonts/css/icons.css'
import './index.css'
import InputChannel from './InputChannel';
import AdvancedOptions from "./AdvancedOptions";
import BaseOptions from "./BaseOptions";

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      joinBtn: false,
      channel: '',
      baseMode: 'avc',
      transcode: 'interop',
      attendeeMode: 'video',
      videoProfile: '480p_4',

    }
  }

  componentDidMount() {
    window.addEventListener('keypress', (e) => {
      e.keyCode === 13 && this.handleJoin()
    })
  }

  /**
   *
   * @param {String} val 0-9 a-z A-Z _ only
   * @param {Boolean} state
   */
  handleChannel = (val, state) => {
    this.setState({
      channel: val,
      joinBtn: state
    })
  }

  handleJoin = () => {
    if (!this.state.joinBtn) {
      return
    }
    console.log(this.state)
    Cookies.set('channel', this.state.channel)
    Cookies.set('baseMode', this.state.baseMode)
    Cookies.set('transcode', this.state.transcode)
    Cookies.set('attendeeMode', this.state.attendeeMode)
    Cookies.set('videoProfile', this.state.videoProfile)
    window.location.hash = "meeting"
  }

  render() {
    return (
      <div className="wrapper index">
        <div className="ag-header"></div>
        <div className="ag-main">
          <section className="login-wrapper">
            <div className="login-header">
              <img src={require('../../assets/images/Joynt-Symbol-Logo.png')} alt=""/>
              <p className="login-title">Joynt Sundays</p>
              <p className="login-subtitle">Live Sessions with your favourite Celebrities</p>
            </div>
            <div className="login-body">
              <div className="columns">
                <div className="column is-12">
                  <InputChannel onChange={this.handleChannel} placeholder="Input a room name here"></InputChannel>
                </div>
              </div>
              <div className="columns">
                <div className="column is-7">
                  <BaseOptions
                    onChange={val => this.setState({baseMode: val})}>
                  </BaseOptions>
                </div>
                <div className="column is-5">
                  <AdvancedOptions
                    onRadioChange={val => this.setState({transcode: val})}
                    onSelectChange={val => this.setState({videoProfile: val})}>
                  </AdvancedOptions>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div id="attendeeMode" className="control">
                    <label className="radio">
                      <input onChange={e => this.setState({attendeeMode: e.target.value})}
                             value="video" type="radio"
                             name="attendee" defaultChecked/>
                      <span className="radio-btn">
                      </span>
                      <span className="radio-img video">
                      </span>
                      <span className="radio-msg">Video Call : join with video call</span>
                    </label>
                    <br/>
                    <label className="radio">
                      <input onChange={e => this.setState({attendeeMode: e.target.value})}
                             value="audio-only" type="radio"
                             name="attendee"/>
                      <span className="radio-btn">
                      </span>
                      <span className="radio-img audio">
                      </span>
                      <span className="radio-msg">Audio-only : join with audio call</span>
                    </label>
                    <br/>
                    <label className="radio">
                      <input onChange={e => this.setState({attendeeMode: e.target.value})}
                             value="audience" type="radio"
                             name="attendee"/>
                      <span className="radio-btn">
                      </span>
                      <span className="radio-img audience">
                      </span>
                      <span className="radio-msg">Audience : join as an audience</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-footer">
              <a id="joinBtn"
                 onClick={this.handleJoin}
                 disabled={!this.state.joinBtn}
                 className="ag-rounded button is-info">Join
              </a>
            </div>
          </section>
        </div>
        <div className="ag-footer">
          <a className="ag-href" href="https://www.joynt.club">
            <span>Copyright © 2020 Joynt</span>
          </a>
          <div>
            <span>Contact: </span>
            <span className="ag-contact">support@joynt.club</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Home