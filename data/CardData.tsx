// CardData.ts
export type CardDataType = {
  [key: string]: {
    symbol: string;
    date: string;
    balance: string;
    stats: {
      change24h: string;
      volume: string;
      marketCap: string;
    };
  };
};

export const CardData: CardDataType = {
  USD: {
    symbol: "$",
    date: "11/22",
    balance: "40,500,87",
    stats: {
      change24h: "+1.2%",
      volume: "$2.5B",
      marketCap: "$50B",
    },
  },
  EURO: {
    symbol: "€",
    date: "11/22",
    balance: "10,500,87",
    stats: {
      change24h: "+0.8%",
      volume: "€2.1B",
      marketCap: "€45B",
    },
  },
};
