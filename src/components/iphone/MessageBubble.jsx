import React from 'react';
import PT from 'prop-types';

const MessageBubble = ({ children, right = false }) => (
  <div className="wrapper">
    <div className="call-out">
      <div className={right ? 'cut-out-right' : 'cut-out'}>
        <div className={right ? 'circle-right' : 'circle'} />
      </div>
      <div className="bubble">
        <div className="text">
          {children}
        </div>
      </div>
    </div>
    <style jsx>{`
        .wrapper {
          box-sizing: border-box;
          position: relative;
          max-width: 100%;
          margin: 0 10px;
          padding-top: 10px;
          animation-name: appear;
          animation-duration: 200ms;
          animation-iteration-count: 1;
        }

        @keyframes appear {
          from {
            transform: translateX(${right ? '120%' : '-120%'});
          }

          to {
            transform: translateX(0);
          }
        }

        .call-out {
          box-sizing: border-box;
          display: flex;
          justify-content: ${right ? 'flex-end' : 'flex-start'} ;
        }

        .bubble {
          box-sizing: border-box;
          border-radius: ${right ? '20px 0px 20px 20px' : '0px 20px 20px 20px'};
          border: 1px solid #eaeaea;
          background: #eaeaea;
        }

        .cut-out {
          margin-top: 1px;
          top: 0;
          position: absolute;
          height: 12px;
          width: 20px;
          border-left: 1px solid #eaeaea;
          overflow: hidden;
          background:#eaeaea;
        }

        .cut-out-right {
          margin-top: 1px;
          top: 0;
          right: 0;
          position: absolute;
          height: 12px;
          width: 20px;
          border-right: 1px solid #eaeaea;
          overflow: hidden;
          background: #eaeaea;
        }

        .circle {
          position: absolute;
          bottom: 2px;
          left: -1px;
          width: 42px;
          height: 22px;
          border-radius: 50%;
          border: 1px #eaeaea solid;
          background: #fff;
        }

        .circle-right {
          position: absolute;
          bottom: 2px;
          right: -1px;
          width: 42px;
          height: 22px;
          border-radius: 50%;
          background: #F7F9FC;
          border: 1px #eaeaea solid;
        }

        .text {
          box-sizing: border-box;
          color: #484848;
          padding: 10px 0px;
          margin: 0px 15px;
          display: flex;
          align-items: center;
        }
      `}

    </style>
  </div>
);

MessageBubble.propTypes = {
  children: PT.string.isRequired,
  right: PT.bool.isRequired,
};

export default MessageBubble;
