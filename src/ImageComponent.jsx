import { Component } from 'react';
class ImageComponent extends Component {
  render() {
    return <img src={this.props.srcphoto} alt="immagine" />;
  }
}
export default ImageComponent;
