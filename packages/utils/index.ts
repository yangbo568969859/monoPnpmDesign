import type { App, Plugin } from 'vue'
export const withInstall = <T>(comp: T) => {
  const c = comp as any
  c.install = function (app: App) {
    app.component(c.displayName || c.name, comp)
  }
  return comp as T & Plugin
}

const CLASS_PREFIX = 'mo'
export const getComponentCls = (componentName: string): string => {
  return `${CLASS_PREFIX}-${componentName}`
}
