// max age values
export const ages = [
  300, // 5 minutes | 0
  900, // 15 minutes | 1
  1800, // 30 minutes | 2
  3600, // 1 hour | 3
  7200, // 2 hours | 4
  14400, // 4 hours | 5
  28800, // 8 hours | 6
  43200, // 12 hours | 7
  86400, // 1 day | 8
  172800, // 2 days | 9
  259200, // 3 days | 10
  345600, // 4 days | 11
  432000, // 5 days | 12
  518400, // 6 days | 13
  604800, // 1 week | 14
  1209600, // 2 weeks | 15
  1814400, // 3 weeks | 16
  2419200, // 4 weeks | 17
];

export const DEFAULT_CACHE = {
  "X-Website-By": "https://federic.ooo",
  "Cache-Control": `max-age=${ages[0]}, s-maxage=${ages[3]}`,
};
