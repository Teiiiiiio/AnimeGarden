import { ResourceType } from 'animegarden';

export const WORKER_BASE = `animegarden.yjl9903.workers.dev`;

export const types = [
  '动画',
  '季度全集',
  '音乐',
  '动漫音乐',
  '同人音乐',
  '流行音乐',
  '日剧',
  'RAW',
  '其他',
  '漫画',
  '港台原版',
  '日文原版',
  '游戏',
  '电脑游戏',
  '主机游戏',
  '掌机游戏',
  '网络游戏 ',
  '游戏周边',
  '特摄'
];

export const QueryType: Record<string, string> = {
  动画: '動畫',
  季度全集: '季度全集',
  音乐: '音樂',
  动漫音乐: '動漫音樂',
  同人音乐: '同人音樂',
  流行音乐: '流行音樂',
  日剧: '日劇',
  RAW: 'ＲＡＷ',
  其他: '其他',
  漫画: '漫畫',
  港台原版: '港台原版',
  日文原版: '日文原版',
  游戏: '遊戲',
  电脑游戏: '電腦遊戲',
  主机游戏: '電視遊戲',
  掌机游戏: '掌機遊戲',
  '网络游戏 ': '網絡遊戲',
  游戏周边: '遊戲周邊',
  特摄: '特攝'
};

export const DisplayType: Record<ResourceType, string> = {
  動畫: '动画',
  季度全集: '季度全集',
  音樂: '音乐',
  動漫音樂: '动漫音乐',
  同人音樂: '同人音乐',
  流行音樂: '流行音乐',
  日劇: '日剧',
  ＲＡＷ: 'RAW',
  其他: '其他',
  漫畫: '漫画',
  港台原版: '港台原版',
  日文原版: '日文原版',
  遊戲: '游戏',
  電腦遊戲: '电脑游戏',
  電視遊戲: '主机游戏',
  掌機遊戲: '掌机游戏',
  網絡遊戲: '网络游戏 ',
  遊戲周邊: '游戏周边',
  特攝: '特摄'
};

export const DisplayTypeColor: Record<ResourceType, string> = {
  動畫: 'text-red-600',
  季度全集: 'text-red-700',
  漫畫: 'text-green-600',
  港台原版: 'text-green-600',
  日文原版: 'text-green-600',
  音樂: 'text-purple-600',
  動漫音樂: 'text-purple-600',
  同人音樂: 'text-purple-600',
  流行音樂: 'text-purple-600',
  日劇: 'text-blue-600',
  ＲＡＷ: '',
  遊戲: '',
  電腦遊戲: '',
  電視遊戲: '',
  掌機遊戲: '',
  網絡遊戲: '',
  遊戲周邊: '',
  特攝: 'text-rose-600',
  其他: 'text-base-800'
};

export const fansubs = [
  { id: 619, name: '桜都字幕组' },
  { id: 833, name: '北宇治字幕组' },
  { id: 185, name: '极影字幕社' },
  { id: 669, name: '喵萌奶茶屋' },
  { id: 151, name: '悠哈C9字幕社' },
  { id: 657, name: 'LoliHouse' },
  { id: 803, name: 'Lilith-Raws' },
  { id: 767, name: '天月動漫&發佈組' },
  { id: 283, name: '千夏字幕组' },
  { id: 816, name: 'ANi' },
  { id: 813, name: 'MingYSub' },
  { id: 650, name: 'SweetSub' },
  { id: 47, name: '爱恋字幕社' },
  { id: 303, name: '动漫国字幕组' },
  { id: 241, name: '幻樱字幕组' },
  { id: 390, name: '天使动漫论坛' },
  { id: 804, name: '霜庭云花Sub' },
  { id: 731, name: '星空字幕组' },
  { id: 321, name: '轻之国度' },
  { id: 764, name: 'MCE汉化组' },
  { id: 604, name: 'c.c动漫' },
  { id: 288, name: '诸神kamigami字幕组' },
  { id: 438, name: '白恋字幕组' },
  { id: 834, name: '氢气烤肉架' },
  { id: 837, name: '六道我大鸽汉化组' },
  { id: 838, name: '云歌字幕组' },
  { id: 840, name: '成子坂地下室' },
  { id: 841, name: '失眠搬运组' },
  { id: 842, name: 'SRVFI-Raws' },
  { id: 843, name: 'Pharos of MyGO' },
  // 特摄
  { id: 648, name: '魔星字幕团' },
  { id: 805, name: 'DBD制作组' },
  { id: 228, name: 'KRL字幕组' },
  // 其它
  { id: 550, name: '萝莉社活动室' },
  { id: 755, name: 'GMTeam' },
  { id: 454, name: '风车字幕组' },
  { id: 37, name: '雪飄工作室(FLsnow)' },
  { id: 488, name: '丸子家族' },
  { id: 574, name: '梦蓝字幕组' },
  { id: 504, name: 'LoveEcho!' },
  { id: 576, name: '银色子弹字幕组' },
  { id: 75, name: '柯南事务所' },
  { id: 630, name: '枫叶字幕组' },
  { id: 665, name: 'YWCN字幕组' },
  // 日剧
  { id: 749, name: '幻月字幕组' },
  // { id: 823, name: '拨雪寻春' },
  { id: 649, name: '云光字幕组' },
  { id: 520, name: '豌豆字幕组' },
  { id: 626, name: '驯兽师联盟' },
  { id: 666, name: '中肯字幕組' },
  { id: 781, name: 'SW字幕组' },
  { id: 434, name: '风之圣殿' },
  { id: 49, name: '华盟字幕社' },
  { id: 627, name: '波洛咖啡厅' },
  { id: 88, name: '动音漫影' },
  { id: 581, name: 'VCB-Studio' },
  { id: 407, name: 'DHR動研字幕組' },
  { id: 719, name: '80v08' },
  { id: 732, name: '肥猫压制' },
  { id: 680, name: 'Little字幕组' },
  { id: 613, name: 'AI-Raws' },
  { id: 806, name: '离谱Sub' },
  { id: 812, name: '虹咲学园烤肉同好会' },
  { id: 636, name: 'ARIA吧汉化组' },
  { id: 821, name: '百冬練習組' },
  { id: 641, name: '冷番补完字幕组' },
  { id: 765, name: '爱咕字幕组' },
  { id: 822, name: '極彩字幕组' },
  { id: 592, name: '未央阁联盟' },
  { id: 703, name: '届恋字幕组' },
  { id: 808, name: '夜莺家族' },
  { id: 734, name: 'TD-RAWS' },
  { id: 447, name: '夢幻戀櫻' },
  { id: 790, name: 'WBX-SUB' },
  { id: 814, name: 'Amor字幕组' }
  // 停更
  // { id: 217, name: 'AQUA工作室' },
  // { id: 832, name: 'Sakura' },
  // { id: 817, name: 'EMe' },
  // { id: 818, name: 'Alchemist' }
  // { id: 479, name: 'Little Subbers!' }
  // { id: 835, name: '小白GM' },
  // { id: 819, name: '黑岩射手吧字幕组' },
  // { id: 807, name: 'Liella!の烧烤摊' },
  // { id: 801, name: 'NC-Raws' },
  // { id: 772, name: 'IET字幕組' },
  // { id: 117, name: '動漫花園' },
  // { id: 836, name: 'MSB制作組' }
];
