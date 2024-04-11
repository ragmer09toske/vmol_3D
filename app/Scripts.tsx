import React from 'react';

const MyComponent: React.FC = () => {
  const handleAlertClick = () => {
    my.alert({
      title: 'Test Alert!!',
      content: window.navigator.userAgent,
      buttonText: 'Alert Button',
      success: (res: any) => {
        my.alert({
          content: 'success!' + JSON.stringify(res),
        });
      },
      fail: () => {
        my.alert({
          content: 'fail!',
        });
      },
      complete: () => {
        my.alert({
          content: 'complete!',
        });
      },
    });
  };

  return (
    <div>
      <button id="alert" onClick={handleAlertClick}>my.alert</button>
    </div>
  );
};

export default MyComponent;
