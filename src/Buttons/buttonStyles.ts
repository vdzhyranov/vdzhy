import { notifyNever } from '../../utils/notifyNever'

export type ButtonSize = 'Small' | 'Default' | 'Big'

export type ButtonColorStyle =
  | 'Default'
  | 'Proceed Green'
  | 'Alert Red'
  | 'White'
  | 'Edit Blue'
  | 'Transparent'

export const mapButtonColorToClassName = (color: ButtonColorStyle) => {
  switch (color) {
    case 'Default':
      return 'bg-kg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 border border-gray-300 hover:bg-kg/95 text-white'
    case 'Alert Red':
      return 'focus:ring-2 focus:ring-red-500 bg-red-600 hover:bg-red-400 border text-white'
    case 'Proceed Green':
      return 'bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-white border border-transparent'
    case 'Edit Blue':
      return 'bg-kg-50 text-kg-600 hover:bg-kg-100 hover:text-kg-700 focus:outline-none focus:ring-2 focus:ring-kg-500 focus:ring-offset-2 border border-transparent'
    case 'White':
      return 'bg-white hover:bg-gray-100 hover:text-kg-600 border border-gray-300'
    case 'Transparent':
      return 'focus:outline-none focus:ring-2 focus:ring-white hover:bg-gray-100 border border-transparent'
    default:
      notifyNever(color)

      return ''
  }
}

export const mapButtonSizeToClassName = (size: ButtonSize) => {
  switch (size) {
    case 'Big':
      return 'text-sm py-3 px-4'
    case 'Default':
      return 'text-xs py-2 px-4'
    case 'Small':
      return 'text-xs p-2'
    default:
      notifyNever(size)

      return ''
  }
}
