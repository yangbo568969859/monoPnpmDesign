import type { ExtractPropTypes, PropType } from 'vue'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'

export type ButtonSize = 'small' | 'default' | 'large'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'button',
  },
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
