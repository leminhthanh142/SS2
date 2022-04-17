export const useTutorials = () => {
  /**
   * @param {Array<Tutorial>} tutorials
   * @param {number} ignoreTutorialId
   * @returns {Array<Tutorial>}
   */
  const getTutorials = (tutorials, ignoreTutorialId) => {
    if (ignoreTutorialId) {
      return tutorials.filter((tutorial) => tutorial.id !== ignoreTutorialId);
    }
    return tutorials;
  };

  return { getTutorials };
};
