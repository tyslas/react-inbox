import React from 'react';

const readUnread = (readProp) => {
  if (readProp === true) {
    return 'row message unread';
  }
  else {
    return 'row message read';
  }
}

const selectUnselect = (data) => {
  // return !!data.selected
    if (data.selected === true) {
      return 'selected';
    }
    else if (data.selected === false) {
      return '';
    } else {
      return 'defaultChecked'
    }
}

const labelGenerator = (data) => {
  let labels = [];

  if (data.length > 0) {
    for (var i = 0; i < data.length; i++) {
      labels.push(<span className="label label-warning" key={i}>{data[i]}</span>)
    }
  }
  return labels;
}

const starNoStar = (starProp) => {
  if (starProp === true) {
    return 'star fa fa-star';
  }
  else {
    return 'star fa fa-star-o';
  }
}

const selector = (selCheck) => {

  if (selCheck === true) {
    return true;
  }
  else {
    return false;
  }
}

const message = ({data, onSelect}) => {
  console.log(data);
  // let classNames = 'row message'
  //  classNames += this.props.message.read === true
  //     ? ' read' : ' unread'
  //  if (this.props.message.selected === true) {classNames += ' selected'}
  //
  // let isStarred = 'star fa '
  //   isStarred += this.props.message.starred === true
  //     ? 'fa-star' : 'fa-star-o'

  return (
    <div className={`${readUnread(data.read)} ${selectUnselect(data)}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" onChange={onSelect}
            defaultChecked={selector(data.selected)} />
          </div>
          <div className="col-xs-2">
            <i className={starNoStar(data.starred)}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {labelGenerator(data.labels)}
        <a href="#">{`${data.subject}`}</a>
      </div>
    </div>
  )
}

export default message;
