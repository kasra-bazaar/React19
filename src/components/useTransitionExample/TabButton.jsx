/* eslint-disable react/prop-types */
const TabButton = ({ children, isActive, onClick }) => {
  if (isActive) {
    return <div className='text-green-600 font-bold'>{children}</div>;
  }
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};
export default TabButton;
