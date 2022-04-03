export const TagsType = {
  Language: 'language',
  Basic: 'basic',
  Core: 'core'
};

export const tutorials = [
  {
    id: 1,
    title: '[Java-Core-01] Giới thiệu Java căn bản',
    path: '/tutorials/1',
    tags: [
      {
        id: 1,
        title: 'Java',
        type: TagsType.Language
      },
      {
        id: 1,
        title: 'Basic',
        type: TagsType.Basic
      },
      {
        id: 1,
        title: 'Core',
        type: TagsType.Core
      }
    ]
  },
  {
    id: 2,
    title: '[Java-Core-02] Comment, Biến, kiểu dữ liệu trong Java',
    path: '/tutorials/2',
    tags: [
      {
        id: 1,
        title: 'Java',
        type: TagsType.Language
      },
      {
        id: 1,
        title: 'Basic',
        type: TagsType.Basic
      },
      {
        id: 1,
        title: 'Core',
        type: TagsType.Core
      }
    ]
  },
  {
    id: 3,
    title: '[Java-Core-03] Biểu thức, Statements ,Boolean expressions',
    path: '/tutorials/3',
    tags: [
      {
        id: 1,
        title: 'Java',
        type: TagsType.Language
      },
      {
        id: 1,
        title: 'Basic',
        type: TagsType.Basic
      },
      {
        id: 1,
        title: 'Core',
        type: TagsType.Core
      }
    ]
  }
];
