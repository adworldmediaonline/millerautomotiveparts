interface Product {
  id: string;
  name: string;
  mainImage?: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export const products: Product[] = [
  {
    id: 'tie-rod-ends',
    name: 'Tie Rod Ends',
    mainImage: 'THE_ROD_ENDS_ivhycm',
    images: [
      {
        src: 'DSC_4693_jfldfm',
        alt: 'Tie Rod End - 1',
      },
      {
        src: 'DSC_4746_b9qblk',
        alt: 'Tie Rod End - 2',
      },
      {
        src: 'DSC_4764_h9vuds',
        alt: 'Tie Rod End - 3',
      },
      {
        src: 'DSC_4734_wf3j8c',
        alt: 'Tie Rod End - 4',
      },
      {
        src: 'IMG_3911_nrtpjo',
        alt: 'Tie Rod End - 5',
      },
      {
        src: '3840_fzvwjl',
        alt: 'Tie Rod End - 6',
      },
    ],
  },
  {
    id: 'billet-t6061',
    name: 'Billet T 6061',
    mainImage: 'BILLET_-_T6061_theybh',
    images: [
      {
        src: 'wheel_spacers_gtqcya',
        alt: 'Billet T6061 Component - 1',
      },
      {
        src: 'DSC_4595_n9q3bl',
        alt: 'Billet T6061 Component - 2',
      },
      {
        src: 'DSC_4587_knlxl6',
        alt: 'Billet T6061 Component - 3',
      },
      {
        src: 'DSC_4616_svo79j',
        alt: 'Billet T6061 Component - 4',
      },
      {
        src: 'DSC_7872_dbnqzz',
        alt: 'Billet T6061 Component - 5',
      },
      {
        src: 'DSC_4622_ygv3iq',
        alt: 'Billet T6061 Component - 6',
      },
      {
        src: 'DSC_7732_vjttac',
        alt: 'Billet T6061 Component - 7',
      },
      {
        src: 'DSC_4162_oc96pt',
        alt: 'Billet T6061 Component - 8',
      },
    ],
  },
  {
    id: 'billet-steel',
    name: 'Billet Steel',
    mainImage: 'BILLET_-_STEEL_mxlncn',
    images: [
      {
        src: 'IMG_4584_rjvstk',
        alt: 'Billet Steel Component - 1',
      },
      {
        src: 'DSC_7673_bmvjuo',
        alt: 'Billet Steel Component - 2',
      },
      {
        src: 'DSC_4346_xuxunn',
        alt: 'Billet Steel Component - 3',
      },
      {
        src: 'DSC_4031_wx8dkw',
        alt: 'Billet Steel Component - 4',
      },
      {
        src: 'DSC_5012_qp3o82',
        alt: 'Billet Steel Component - 5',
      },
      {
        src: 'DSC_4000_up3ei0',
        alt: 'Billet Steel Component - 6',
      },
      // {
      //   src: 'DSC_7772_endvuw',
      //   alt: 'Billet Steel Component - 7',
      // },
    ],
  },
  {
    id: 'forgings',
    name: 'Forgings',
    mainImage: 'FORGING_ujn38o',
    images: [
      {
        src: 'IMG_0511_vguam4',
        alt: 'Forged Component - 1',
      },
      {
        src: 'IMG_4577_b78kb6',
        alt: 'Forged Component - 2',
      },
      {
        src: 'DSC_4047_hbq07s',
        alt: 'Forged Component - 3',
      },
      {
        src: 'DSC_4357_ff6elx',
        alt: 'Forged Component - 4',
      },
      {
        src: 'DSC_7724_v7hviz',
        alt: 'Forged Component - 5',
      },
      {
        src: 'IMG_4576_qfr6l3',
        alt: 'Forged Component - 6',
      },
      {
        src: 'DSC_4397_dxlujn',
        alt: 'Forged Component - 7',
      },
    ],
  },
  {
    id: 'castings',
    name: 'Castings',
    mainImage: 'CASTINGS_h4ebt9',
    images: [
      {
        src: 'DIFF_COVER_trfkyz',
        alt: 'Cast Component - 1',
      },
      {
        src: 'IMG_4589_iv0g7k',
        alt: 'Cast Component - 2',
      },
      {
        src: 'IMG_4575_gsl6md',
        alt: 'Cast Component - 3',
      },
      {
        src: 'DSC_5128_so4sun',
        alt: 'Cast Component - 4',
      },
      {
        src: 'DSC_7637_bfyqna',
        alt: 'Cast Component - 5',
      },
      {
        src: 'DSC_7713_hta13g',
        alt: 'Cast Component - 6',
      },
    ],
  },
  {
    id: 'joints-and-bushings',
    name: 'Joints and Bushings',
    mainImage: 'JOINTS_BUSHINGS_erplhz',
    images: [
      {
        src: 'IMG_4622_ceawfg',
        alt: 'Joint Component - 1',
      },
      {
        src: 'IMG_4624_coaydx',
        alt: 'Joint Component - 2',
      },
      {
        src: 'IMG_4620_a9mzy3',
        alt: 'Joint Component - 3',
      },
      {
        src: 'IMG_4623_tb32ib',
        alt: 'Joint Component - 4',
      },
      {
        src: 'IMG_3917_ikhj7w',
        alt: 'Joint Component - 5',
      },
      {
        src: 'IMG_4619_nxupke',
        alt: 'Joint Component - 6',
      },
      {
        src: 'IMG_4621_vbbhry',
        alt: 'Joint Component - 7',
      },
    ],
  },
  {
    id: 'ball-joints',
    name: 'Ball Joints',
    mainImage: 'BALL_JOINTS_btotay',
    images: [
      {
        src: 'IMG_4682_xracoh',
        alt: 'Ball Joint Front View - 1',
      },
      {
        src: 'IMG_4683_ybqji1',
        alt: 'Ball Joint Front View - 2',
      },
      {
        src: 'DSC_4370_zq7lws',
        alt: 'Ball Joint Front View - 3',
      },
    ],
  },
  {
    id: 'hardware',
    name: 'Hardware',
    mainImage: 'HARDWARE_cx0hva',
    images: [
      {
        src: 'IMG_4591_zpqruy',
        alt: 'Hardware Components - 1',
      },
      {
        src: 'DSC_4479_qszsx1',
        alt: 'Hardware Components - 2',
      },
      {
        src: 'DSC_4511_inguov',
        alt: 'Hardware Components - 3',
      },
      {
        src: '4228_rxhrtk',
        alt: 'Hardware Components - 4',
      },
      {
        src: 'DSC_4406_hcrznc',
        alt: 'Hardware Components - 5',
      },
      {
        src: 'DSC_4070_fnuwie',
        alt: 'Hardware Components - 6',
      },
    ],
  },
  {
    id: 'dom-and-bars',
    name: 'DOM and Bars',
    mainImage: 'DOM_BARS_qywkol',
    images: [
      {
        src: 'dom_tube_sr8mvd',
        alt: 'DOM Tubing - 1',
      },
      {
        src: 'IMG_4681_vopbwn',
        alt: 'DOM Tubing - 2',
      },
      {
        src: 'IMG_4680_lputpl',
        alt: 'DOM Tubing - 3',
      },
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
    mainImage: 'TOOLS_ohojyp',
    images: [
      {
        src: 'IMG_0486_hvdjnh',
        alt: 'Automotive Tools - 1',
      },
      {
        src: 'IMG_4594_flk01r',
        alt: 'Automotive Tools - 2',
      },
      {
        src: 'DSC_4181_nlkstg',
        alt: 'Automotive Tools - 3',
      },
    ],
  },
];
