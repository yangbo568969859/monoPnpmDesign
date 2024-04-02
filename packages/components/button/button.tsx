import { computed, defineComponent, toRefs } from 'vue'
import { getComponentCls } from '@mono-ui/utils'
import { buttonProps } from './button-type'
import type { ButtonProps } from './button-type'

export default defineComponent({
  name: 'MoButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled } = toRefs(props)
    const prefixCls = getComponentCls('button')
    const classes = computed(() => [
      prefixCls,
      `${prefixCls}--${type.value}`,
      `${prefixCls}--${size.value}`,
      disabled.value ? 'is-disabled' : '',
    ])
    return () => {
      const { tag: Component } = props
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return (
        <Component disabled={disabled.value} class={classes.value}>
          {defaultSlot}
        </Component>
      )
    }
  },
})
