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
    if (data.selected === true) {
      return 'selected';
    }
    else if (data.selected === false) {
      return '';
    }
}

const labelGenerator = (data) => {
  var labels = [];

  if (data.length > 0) {
    for (var i = 0; i < data.length; i++) {
      labels.push(<span className="label label-warning">{data[i]}</span>)
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

const message = ({data}) => {
  return (
    <div className={`${readUnread(data.read)} ${selectUnselect(data)}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" />
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
