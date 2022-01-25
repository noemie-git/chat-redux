import React from 'react';

const Message = (props) => {
  // eslint-disable-next-line camelcase
  const { created_at, author, content } = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <i className="author">
        <span>
          {author}
        </span>
        <small>
          {time}
        </small>
      </i>
      <p className="content">
        {content}
      </p>
    </div>
  );
};

export default Message;
