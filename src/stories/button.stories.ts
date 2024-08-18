import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { HttpClientModule } from '@angular/common/http';
import { moduleMetadata } from '@storybook/angular'; // Importa moduleMetadata
import { FilmsController } from 'src/app/headless/films.controller';
import { FilmsServiceService } from 'src/app/core/services/films-service.service';

// Configuración del metadato principal de la historia
const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule], 
      providers: [FilmsController, FilmsServiceService],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  args: {
    onClick: () => {
      console.log('Button clicked');
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// Ejemplos de historias
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
