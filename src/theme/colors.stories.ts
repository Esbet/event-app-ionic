import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { ColorPaletteComponent } from './colors.component';

export default {
  title: 'Design System/Colors',
  component: ColorPaletteComponent,
  decorators: [
    moduleMetadata({
      imports: [IonicModule.forRoot()],
    }),
  ],
} as Meta<ColorPaletteComponent>;

const colors = [
  { name: 'Primary', value: '#e81f91' },
  { name: 'Primary Contrast', value: '#ffffff' },
  { name: 'Primary Shade', value: '#cc1b80' },
  { name: 'Primary Tint', value: '#ea359c' },

  { name: 'Secondary', value: '#1fe8a7' },
  { name: 'Secondary Contrast', value: '#000000' },
  { name: 'Secondary Shade', value: '#1bcc93' },
  { name: 'Secondary Tint', value: '#35eab0' },

  { name: 'Tertiary', value: '#c51fe8' },
  { name: 'Tertiary Contrast', value: '#000000' },
  { name: 'Tertiary Shade', value: '#ad1bcc' },
  { name: 'Tertiary Tint', value: '#cb35ea' },
];

const Template: StoryFn<ColorPaletteComponent> = (args: ColorPaletteComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  colors,
};
