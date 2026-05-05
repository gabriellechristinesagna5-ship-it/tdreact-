import { useState } from 'react';
import arrowUp from '../assets/arrow_up.png';
import arrowDown from '../assets/arrow_down.png';

function Collapse({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article className="collapse">
      <button
        type="button"
        className="collapse-header"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="collapse-header-title">{title}</span>
        <span className={open ? 'collapse-header-image2' : 'collapse-header-image1'}>
          <img src={open ? arrowDown : arrowUp} alt="" aria-hidden="true" />
        </span>
      </button>

      {open ? <div className="collapse-content">{children}</div> : null}
    </article>
  );
}

export default Collapse;
