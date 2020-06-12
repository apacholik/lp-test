const colors = {
  primary: 'tomato',
  normal: 'black',
  bananaMania: '#FBE7B5',
  indigo: '#5969D4',
  sanMarino: '#4C5BB0',
  cinnabar: '#E73827',
}

const gradients = {
  primary: `linear-gradient(135deg, ${colors.indigo} 0%, ${colors.sanMarino} 19%, ${colors.cinnabar} 100%)`,
}

const theme = {
  colors,
  gradients,
  bodyHead: {
    backgroundColor: '#2c2361',
    textColor: '#ff8175',
  },
  nav: {
    link: {
      color: '#ff8175',
    }
  },
  footer: {
    backgroundColor: colors.bananaMania,
    link: {
      color: '#5342b8',
    },
  },
  inputs: {
    primary: gradients.primary
  },
};

export default theme;