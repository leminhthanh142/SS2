import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
export const Replit = ({ repo, query, height = 600, path }) => {
  const replitQuery = useMemo(() => new URLSearchParams(query).toString(), [query]);
  const src = useMemo(() => {
    if (replitQuery && path) {
      return `https://replit.com/@leminhthanh142/${repo}?${replitQuery}#${path}`;
    }
    if (replitQuery) {
      return `https://replit.com/@leminhthanh142/${repo}?${replitQuery}`;
    }
    return `https://replit.com/@leminhthanh142/${repo}`;
  }, [path, query, repo]);

  return <iframe frameBorder="0" width="100%" height={`${height}px`} src={src} />;
};

Replit.propTypes = {
  repo: PropTypes.string,
  query: PropTypes.object,
  height: PropTypes.number,
  path: PropTypes.string
};
