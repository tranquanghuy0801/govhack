export const getColor = (se4: string) => {
  if (!e4[se4]) {
    return "";
  }
  return e4[se4].color;
};

const getMarkPosition = (long: number, lat: number) => {
  return {
    markerPosition: {
      long,
      lat,
    },
  };
};

interface E4 {
  color: string;
  markerPosition?: {
    long: number;
    lat: number;
  };
}

export const e4: Record<string, E4> = {
  SA4_NAME_2016: {
    color: "#32d3c2",
  },
  "No usual address (Qld)": {
    color: "#e0c46a",
  },
  Townsville: {
    color: "#388de7",
    ...{ ...getMarkPosition(146.816956, -19.258965) },
  },
  "Queensland - Outback": {
    color: "#de8a9e",
  },
  Cairns: {
    color: "#65d2d7",
    ...{ ...getMarkPosition(145.778061, -16.91855) },
  },
  "Darling Downs - Maranoa": {
    color: "#995b65",
    ...{ ...getMarkPosition(115.982193, -32.19249) },
  },
  "Central Queensland": {
    color: "#affd68",
    ...{ ...getMarkPosition(152.171722, -25.19454) },
  },
  "Logan - Beaudesert": {
    color: "#8866a7",
    ...{ ...getMarkPosition(153.109451, -27.639168) },
  },
  "Gold Coast": {
    color: "#123126",
    ...{ ...getMarkPosition(153.399994, -28.016666) },
  },
  Ipswich: {
    color: "#750d38",
    markerPosition: {
      lat: -27.63798,
      long: 152.591843,
    },
  },
  "Mackay - Isaac - Whitsunday": {
    color: "#d79df8",
    ...{ ...getMarkPosition(149.186813, -21.144337) },
  },
  "Wide Bay": {
    color: "#5b657c",
    ...{ ...getMarkPosition(153.14038389957688, -25.900014470851016) },
  },
  "Brisbane - South": {
    color: "#00ffff",
    ...{ ...getMarkPosition(149.186813, -21.144337) },
  },
  "Brisbane Inner City": {
    color: "#d1a23c",
    markerPosition: {
      lat: -27.457251,
      long: 153.033478,
    },
  },
  "Brisbane - West": {
    color: "#640696",
    ...{ ...getMarkPosition(153.00402147042237, -27.483837847798483) },
  },
  "Brisbane - North": {
    color: "#197ae1",
    ...{ ...getMarkPosition(152.986271328848, -27.2375329851083) },
  },
  "Brisbane - East": {
    color: "#70418e",
    ...{ ...getMarkPosition(153.04214757439036, -27.48476039123311) },
  },
  "Moreton Bay - North": {
    color: "#c8a20f",
    ...{ ...getMarkPosition(152.91589823898528, -27.077196401144445) },
  },
  "Sunshine Coast": {
    color: "#786dd8",
    ...{ ...getMarkPosition(153.0671268719981, -26.649733647914605) },
  },
  Toowoomba: {
    color: "#26dac7",
    ...{ ...getMarkPosition(151.9516652668405, -27.559994127560362) },
  },
  "Moreton Bay - South": {
    color: "#11437f",
    ...{ ...getMarkPosition(152.91134292885647, -27.204776989744097) },
  },
  "Migratory - Offshore - Shipping (Qld)": {
    color: "#1b42c8",
  },
};
