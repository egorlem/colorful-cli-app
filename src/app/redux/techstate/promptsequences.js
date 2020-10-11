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
    sequences: "Userhost",
    text: "The FQDN hostname",
    code: "\\h",
  },
  {
    sequences: "Userhost.Router",
    text: "The full hostname",
    code: "\\H",
  },
  {
    sequences: "ttys001",
    text: "The base name of term",
    code: "\\l",
  },
  {
    sequences: "bash",
    text: "The name of shell",
    code: "\\s",
  },
  {
    sequences: "3.2",
    text: "The version of shell",
    code: "\\v",
  },
  {
    sequences: "3.2.57",
    text: "The release of shell",
    code: "\\V",
  },
  {
    sequences: "Tue Jan 1",
    text: "The date",
    code: "\\d",
  },
  {
    sequences: "13:10:31",
    text: "The current time 24h",
    code: "\\t",
  },
  {
    sequences: "1:10:31",
    text: "The current time 12h",
    code: "\\T",
  },
  {
    sequences: "UsrName",
    text: "The current user name",
    code: "\\u",
  },
  {
    sequences: "~/src/clrcli",
    text: "The current working dir",
    code: "\\w",
  },
  {
    sequences: "clrcli",
    text: "The base name of working dir",
    code: "\\W",
  },
  {
    sequences: " ",
    text: "Space",
    code: " ",
  },
];
