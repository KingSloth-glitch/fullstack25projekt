import { useState } from 'react';

function ToggleButton() {
  const [isActive, setIsActive] = useState(false);

  const ButtonStyle = {
    backgroundColor: isActive ? 'purple' : 'yellow',
    color: 'black',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div>
      <button style={ButtonStyle} onClick={handleClick}>
        {isActive ? 'aktiv' : 'inaktiv'}
      </button>
    </div>
  );
}

export default ToggleButton;
