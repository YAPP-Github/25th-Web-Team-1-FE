import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@repo/theme';

export const textFieldWrapperStyle = style({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[8],
});

export const textFieldContainerStyle = recipe({
  base: {
    padding: vars.space[16],
    backgroundColor: vars.colors.grey50,
    borderRadius: '1.2rem',
  },
  variants: {
    variant: {
      default: {
        backgroundColor: vars.colors.grey25,
        paddingRight: vars.space[16],
      },
      button: {
        backgroundColor: vars.colors.grey50,
        paddingRight: '4.8rem',
      },
    },
  },
});

export const textFieldStyle = recipe({
  base: {
    width: '100%',
    border: 'none',
    outline: 'none',
    resize: 'none',
    color: vars.colors.grey700,
    fontSize: vars.typography.fontSize[18],
    fontWeight: vars.typography.fontWeight.medium,
    lineHeight: '150%',
    fontFamily: 'inherit',
    paddingRight: vars.space[4],
    maxHeight: `calc(${vars.typography.fontSize[18]} * 11 * 1.5)`,
    overflowY: 'auto',
    '::placeholder': {
      color: vars.colors.grey400,
    },
    selectors: {
      '&::-webkit-scrollbar': {
        width: '0.6rem',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: vars.colors.grey200,
        borderRadius: '0.4rem',
        backgroundClip: 'padding-box',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },
    },
    scrollbarWidth: 'thin',
    scrollbarColor: `${vars.colors.grey200} transparent`,
  },
  variants: {
    variant: {
      default: {
        backgroundColor: vars.colors.grey25,
        '::placeholder': {
          color: vars.colors.grey400,
        },
      },
      button: {
        backgroundColor: vars.colors.grey50,
        '::placeholder': {
          color: vars.colors.grey400,
        },
      },
    },
  },
});

export const submitButtonStyle = recipe({
  base: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '1.2rem',
    width: '3.2rem',
    height: '3.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    background: 'transparent',
    padding: 0,
    cursor: 'pointer',

    ':hover': {
      opacity: 0.8,
    },
  },
  variants: {
    isError: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
});

export const counterStyle = recipe({
  base: {
    fontSize: vars.typography.fontSize[16],
    fontWeight: vars.typography.fontWeight.medium,
    margin: `0 ${vars.space[8]}`,
    lineHeight: '1.5',
    textAlign: 'right',
  },
  variants: {
    isError: {
      false: {
        color: vars.colors.grey500,
      },
      true: {
        color: vars.colors.warning,
      },
    },
  },
  defaultVariants: {
    isError: false,
  },
});

export const labelStyle = recipe({
  variants: {
    isError: {
      true: {
        color: vars.colors.warning,
      },
    },
  },
});