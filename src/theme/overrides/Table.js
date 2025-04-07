// ----------------------------------------------------------------------

export default function Table(theme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
        },
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
  }
}
