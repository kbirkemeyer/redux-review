import React, { Component } from 'react'
import styles from './styles'
// In the component you need to use the reducer function in, import connect and the function you'd like to use
import {connect} from 'react-redux';
import {setMovieInfo} from '../redux/moviesReducer';

class MovieForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      poster: '',
      rating: null,
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const {title, poster, rating} = this.state;
    this.props.setMovieInfo(title, poster, rating);
    this.props.history.push('/confirm')
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.containerHeading}>INPUT DETAILS</p>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <input
            style={styles.formInput}
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
          />
          <input
            style={styles.formInput}
            name="poster"
            placeholder="Poster URL"
            onChange={this.handleChange}
          />
          <input
            style={styles.formInput}
            name="rating"
            placeholder="Rating"
            onChange={this.handleChange}
            type="number"
            max={10}
            min={0}
          />
          <button type="submit" style={styles.formButton}>
            NEXT
          </button>
        </form>
      </div>
    )
  }
}

// Add connect to default export line, invoke it, then invoke it again with the name of the component in the second invocation. Connect takes in 2 arguments: a function and an object. The second invocation takes in the name of the component as the argument.
// If you need to see the data in this component, you need the function argument in connect. (specifically mapStateToProps function)
// If you want to change redux state with this component, you need the object (mapDispatchToProps) argument in connect. Dispatch is the action builder.
export default connect(null, {setMovieInfo})(MovieForm);
