import BrandLogo from './BrandLogo.svelte';
import BrandLogoComboGrid from './BrandLogoComboGrid.svelte';

export default {
  title: 'UI/BrandLogo',
  component: BrandLogo,
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
    },
    variant: {
      control: 'select',
      options: ['outline', 'duotone', 'grey'],
    },
    lightColor: { control: 'color' },
    darkColor:  { control: 'color' },
  },
  args: {
    size: 'lg',
    variant: 'duotone',
    lightColor: '#7bbce8',
    darkColor: '#1a3f6f',
  },
};

/** Interactive default — use the controls panel to change size, variant and colors. */
export const Default = {};

/** Two blues — dark frame, light mark. */
export const Duotone = {
  args: { variant: 'duotone', size: 'xl' },
};

/** Stroke only — inherits text color, no fill. */
export const Outline = {
  args: { variant: 'outline', size: 'xl' },
};

/** Greyscale fill — works on any background. */
export const Grey = {
  args: { variant: 'grey', size: 'xl' },
};

/** Size x variant matrix in one place. */
export const AllCombo = {
  render: (args) => ({
    Component: BrandLogoComboGrid,
    props: {
      lightColor: args.lightColor,
      darkColor: args.darkColor,
    },
  }),
  parameters: {
    docs: {
      description: {
        story: '2D grid showing all size and variant combinations.',
      },
    },
  },
};
