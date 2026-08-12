export interface TrackVersion {
  id: string
  title: string
  artist: string
  versionType: string
  artwork: string
}

export interface Track {
  id: string
  title: string
  artist: string
  composer?: string
  artwork: string
  dominantColor: string
  contextLines?: string[]
  badges?: string[]
  socialStats: {
    likes: string
    comments: string
    shares: string
  }
  versions: TrackVersion[]
}

export const tracks: Track[] = [
  {
    id: 'track-main',
    title: '爱的主打歌 (Remix)',
    artist: '雀奴',
    composer: '雀奴',
    artwork: '/assets/track-main.png',
    dominantColor: '#30261F',
    contextLines: ['作曲：雀奴', '纯音乐，请欣赏'],
    badges: ['限免', '极高'],
    socialStats: {
      likes: '1w+',
      comments: '25',
      shares: '222',
    },
    versions: [
      {
        id: 'track-main-remix',
        title: '爱的主打歌 (Remix)',
        artist: '雀奴',
        versionType: 'Remix',
        artwork: '/assets/track-main.png',
      },
      {
        id: 'track-main-original',
        title: '爱的主打歌',
        artist: '萧亚轩',
        versionType: '原版',
        artwork: '/assets/track-main-original.png',
      },
      {
        id: 'track-main-speed',
        title: '爱的主打歌（加速版）',
        artist: 'Mock Artist',
        versionType: '加速版',
        artwork: '/assets/track-main-speed.png',
      },
      {
        id: 'track-main-dj',
        title: '爱的主打歌（温柔DJ）',
        artist: 'Mock Artist',
        versionType: 'DJ版',
        artwork: '/assets/track-main-dj.png',
      },
    ],
  },
  {
    id: 'track-two',
    title: '夜色漫游',
    artist: 'Luna Orbit',
    artwork: '/assets/track-two.png',
    dominantColor: '#071A29',
    contextLines: ['夜晚总会替你收藏一些声音'],
    badges: ['新歌'],
    socialStats: {
      likes: '8.7k',
      comments: '91',
      shares: '530',
    },
    versions: [],
  },
  {
    id: 'track-three',
    title: '薄雾与晚风',
    artist: 'Echoes',
    artwork: '/assets/track-three.png',
    dominantColor: '#281A29',
    contextLines: ['晚风经过山谷，也经过你'],
    badges: ['私人订阅'],
    socialStats: {
      likes: '1.3w',
      comments: '32',
      shares: '174',
    },
    versions: [
      {
        id: 'track-three-default',
        title: '薄雾与晚风',
        artist: 'Echoes',
        versionType: '原版',
        artwork: '/assets/track-three.png',
      },
      {
        id: 'track-three-alt',
        title: '薄雾与晚风（夜色版）',
        artist: 'Echoes',
        versionType: 'Remix',
        artwork: '/assets/track-three.png',
      },
    ],
  },
]
