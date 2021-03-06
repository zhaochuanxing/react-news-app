import React from 'react';
import 'css/pc/pc_middle.scss';
import Carousel from './pc_carousel';
import PCNewsItem from './pc_news_item';
class PCMiddle extends React.Component {
  constructor() {
    super();
    this.state = {
      channel: '',
      keyword: ''
    };
  }
  componentWillMount() {
    this.setState({
      channel: this.props.match.params.id,
      keyword: this.props.match.params.keyword
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params !== this.props.match.params) {
      this.setState({
        channel: nextProps.match.params.id,
        keyword: nextProps.match.params.keyword
      });
    }
  }
  render() {
    return (
      <div className="middle-wrapper">
        {this.state.channel === undefined && this.state.keyword === undefined
          ? <div>
              <Carousel />
              <PCNewsItem />
            </div>
          : <PCNewsItem
              channel={this.state.channel}
              keyword={this.state.keyword}
            />}
      </div>
    );
  }
}

export default PCMiddle;
