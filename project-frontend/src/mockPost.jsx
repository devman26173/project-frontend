export const mockPost = {
    username: 'そんひゃん',
    time: '10分前',
    title: '「グルメ」札幌のスープカレーおすすめ！',
    content: 'めちゃくちゃ人並んでいるガラクよりスープカレーキングのほうが美味しいです❣',
    likes: 3,
    comments: [
      {
        id: 1,
        username: 'ユーザー',
        text: 'ありがとうー',
        time: '8分前',
        likes: 1,
        replies: [],
        timestamp: Date.now() - 8 * 60 * 1000,
      },
      {
        id: 2,
        username: 'ユーザー',
        text: '行ってみます！！',
        time: '4分前',
        likes: 0,
        replies: [],
        timestamp: Date.now() - 4 * 60 * 1000,
      },
      {
        id: 3,
        username: 'ユーザー',
        text: 'ガラクも美味しかった～！',
        time: '3分前',
        likes: 2,
        replies: [],
        timestamp: Date.now() - 4 * 60 * 1000,
      }
    ]
  };