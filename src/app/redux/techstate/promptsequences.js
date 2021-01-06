export const psOneSequences = [
  // {
  //   text: "The hostname (short)",
  //   sequences: "LocalHost",
  //   code: "\\h",
  // },
  // {
  //   text: "The base name of term",
  //   sequences: "ttys001",
  //   code: "\\l",
  // },
  // {
  //   text: "The name of shell",
  //   sequences: "bash",
  //   code: "\\s",
  // },
  // {
  //   text: "The current time",
  //   sequences: "16:00:03",
  //   code: "\\t",
  // },
  // {
  //   text: "The username",
  //   sequences: "InitUser",
  //   code: "\\u",
  // },
  // {
  //   text: "The version of shell",
  //   sequences: "3.2",
  //   code: "\\v",
  // },
  // {
  //   text: "space",
  //   sequences: " ",
  //   code: " ",
  // },

  // NEW

  {
    sequences: 'Userhost',
    text: 'The FQDN hostname',
    code: '\\h',
    type: 'SEQUENCES',
  },
  {
    sequences: 'Userhost.Router',
    text: 'The full hostname',
    code: '\\H',
    type: 'SEQUENCES',
  },
  {
    sequences: 'ttys001',
    text: 'The base name of term',
    code: '\\l',
    type: 'SEQUENCES',
  },
  {
    sequences: 'bash',
    text: 'The name of shell',
    code: '\\s',
    type: 'SEQUENCES',
  },
  {
    sequences: '3.2',
    text: 'The version of shell',
    code: '\\v',
    type: 'SEQUENCES',
  },
  {
    sequences: '3.2.57',
    text: 'The release of shell',
    code: '\\V',
    type: 'SEQUENCES',
  },
  {
    sequences: 'Tue Jan 1',
    text: 'The date',
    code: '\\d',
    type: 'SEQUENCES',
  },
  {
    sequences: '13:10:31',
    text: 'The current time 24h',
    code: '\\t',
    type: 'SEQUENCES',
  },
  {
    sequences: '1:10:31',
    text: 'The current time 12h',
    code: '\\T',
    type: 'SEQUENCES',
  },
  {
    sequences: 'UsrName',
    text: 'The current user name',
    code: '\\u',
    type: 'SEQUENCES',
  },
  {
    sequences: '~/src/clrcli',
    text: 'The current working dir',
    code: '\\w',
    type: 'SEQUENCES',
  },
  {
    sequences: 'clrcli',
    text: 'The base name of working dir',
    code: '\\W',
    type: 'SEQUENCES',
  },
  {
    sequences: 'Master',
    text: 'Git branch',
    code: '',
    type: 'FUNCTION',
  },
  {
    sequences: ' ',
    text: 'Space',
    code: ' ',
    type: 'SPACE',
  },
  {
    sequences: 'Custom text',
    text: 'hello',
    code: 'fjlasdhfksdhfkajsdhfkjh',
    type: 'CUSTOM_TEXT',
  },
];
