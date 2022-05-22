import PropTypes from 'prop-types';

export const LessonIcon = ({ color = '#54BAF3' }) => {
  return (
    <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 16.0469H13" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M6 19.0469H13" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M1 3.04687C1 4.15144 1.89543 5.04688 3 5.04688H17V1.12851C17 1.08342 16.9635 1.04687 16.9184 1.04687H3C1.89543 1.04687 1 1.94231 1 3.04687V3.04687Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M11 10.9288L13 9.92884V6.04688H9V9.92884L11 10.9288Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M1 3.04688V21.0469C1 22.1514 1.89543 23.0469 3 23.0469H16C16.5523 23.0469 17 22.5992 17 22.0469V3.04688"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

LessonIcon.propTypes = {
  color: PropTypes.string
};
