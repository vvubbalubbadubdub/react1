import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  state={
    isVisible:false
  }
  onClickEvent(a,e){
    console.log(this)
  }

  render() {
    const {name,department,salary} = this.props
    const {isVisible} = this.state
      return (
          <div className="col-md-8 mb-4">
            <div className="card-header d-flex justify-content-between">
              <h4 className="d-inline" onClick={this.onClickEvent.bind(this,"1")}>{name}</h4>
              <i className="fas fa-user-minus" style={{cursor:"pointer"}} ></i>
            </div>
            <div className="card-body">
              <p className="card-text">departman: {department}</p>
              <p className="card-text">maaş: {salary}</p>
            </div>
          </div>
      )
  }
}
User.defaultProps = {
  name:"bilgi yok",
  department:"bilgi yok",
  salary:"bilgi yok"
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired
}

export default User;