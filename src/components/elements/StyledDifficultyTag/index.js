import { Chip, styled } from '@mui/material';

export const StyledDifficultyTag = styled(Chip)(({ level }) => {
  const baseCss = `
    border-radius: 4px;
    border: 1px solid;
    cursor: pointer;
  `;

  if (level === 8 || level === 7) {
    return `
      ${baseCss}
    `;
  }
  if (level === 6 || level === 5) {
    return `
      ${baseCss}
      color: #15b715;
      background: #dffad7;
    `;
  }
  if (level === 4) {
    return `
      ${baseCss}
      color: #0095ff;
      background: #00a5ff5c;
    `;
  }
  if (level === 3 || level === 2) {
    return `
      ${baseCss}
      color: #ff7700;
      background: #ff77003d;
    `;
  }
  if (level === 1) {
    return `
      ${baseCss}
      color: #ff0000;
      background: #ff00004f;
    `;
  }
});
