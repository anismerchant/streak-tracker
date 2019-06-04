import React, { Component } from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import moment from 'moment';

export default class StreakCard extends Component {
  currentStreak = () => {
    const startDate = this.props.currentStreak;
    return moment.duration(moment(startDate).diff(moment())).asDays();
  }

  render() {
    return(
      <Card title={this.props.title} style={{ width: 300, textAlign: 'center' }}>
        <h1>{this.currentStreak()}</h1>
        <p>Current Streak</p>
        <p>Started: {this.props.startDate}</p>
        <Button type="danger" block>End Streak</Button>
      </Card>
    )
  }
}
