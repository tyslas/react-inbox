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
  console.log(data.selected);
    if (data.selected === true) {
      console.log('selected');
      return 'selected';
    }
    else if (data.selected === false) {
      console.log('unselected');
      return '';
    }
}

// const starNoStar = (starProp) => {
//   if (starProp === true) {
//     console.log('star fa fa-star');
//     return 'star fa fa-star';
//   }
//   else {
//     console.log('star fa fa-star-o');
//     return 'star fa fa-star-o';
//   }
// }

const message = ({data}) => {
  return (
    <div className={`${readUnread(data.read)} ${selectUnselect(data)}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" />
          </div>
          <div className="col-xs-2">
            <i className="star fa fa-star-o"></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        <a href="#">{`${data.labels[0]} ${data.subject}`}</a>
      </div>
    </div>
  )
}

export default message;
