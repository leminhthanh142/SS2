import React from 'react';
import { CommonLayout } from '../../../../components/layout/common';
import { Replit } from '../../../../components/Replit';

export const JsTutorial01 = () => {
  return (
    <CommonLayout>
      <Replit repo={'js'} query={{ lite: true }} path={'index.js'} />
    </CommonLayout>
  );
};
