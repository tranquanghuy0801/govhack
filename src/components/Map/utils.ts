export const getColor = (se4: string) => {
  if (!e4[se4]) {
    return '';
  }
  return e4[se4].color;
};

interface E4 {
  color: string,
  markerPosition?: {
    long: number,
    lat: number,
  }
}

export const e4: Record<string, E4> = {
  "SA4_NAME_2016": {
    color: "#32d3c2"
  },
  "No usual address (Qld)": {
    color: "#e0c46a"
  },
  "Townsville": {
    color: "#388de7"
  },
  "Queensland - Outback": {
    color: "#de8a9e"
  },
  "Cairns": {
    color: "#65d2d7"
  },
  "Darling Downs - Maranoa": {
    color: "#995b65"
  },
  "Central Queensland": {
    color: "#affd68"
  },
  "Logan - Beaudesert": {
    color: "#8866a7"
  },
  "Gold Coast": {
    color: "#123126"
  },
  "Ipswich": {
    color: "#750d38",
    markerPosition: {
      lat: -27.637980,
      long: 152.591843,
    }
  },
  "Mackay - Isaac - Whitsunday": {
    color: "#d79df8"
  },
  "Wide Bay": {
    color: "#5b657c"
  },
  "Brisbane - South": {
    color: "#00ffff"
  },
  "Brisbane Inner City": {
    color: "#d1a23c",
    markerPosition: {
      lat: -27.457251,
      long: 153.033478,
    }
  },
  "Brisbane - West": {
    color: "#640696"
  },
  "Brisbane - North": {
    color: "#197ae1"
  },
  "Brisbane - East": {
    color: "#70418e"
  },
  "Moreton Bay - North": {
    color: "#c8a20f"
  },
  "Sunshine Coast": {
    color: "#786dd8"
  },
  "Toowoomba": {
    color: "#26dac7"
  },
  "Moreton Bay - South": {
    color: "#11437f"
  },
  "Migratory - Offshore - Shipping (Qld)": {
    color: "#1b42c8"
  }
};