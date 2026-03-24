import { AlertCircle, Info, AlertTriangle } from 'react-feather'

/**
 * WarnBox - Styled warning/info/danger callout box
 *
 * Usage: <WarnBox type="warning">Texto de advertencia</WarnBox>
 */
export default function WarnBox({ type = 'info', children }) {
  const config = {
    info: {
      bg: 'bg-primary-container/20',
      border: 'border-primary/40',
      icon: Info,
      iconColor: 'text-primary',
      textColor: 'text-primary',
    },
    warning: {
      bg: 'bg-tertiary/20',
      border: 'border-tertiary/40',
      icon: AlertTriangle,
      iconColor: 'text-tertiary',
      textColor: 'text-tertiary',
    },
    danger: {
      bg: 'bg-error/20',
      border: 'border-error/40',
      icon: AlertCircle,
      iconColor: 'text-error',
      textColor: 'text-error',
    },
  }

  const { bg, border, icon: Icon, iconColor, textColor } = config[type] || config.info

  return (
    <div className={`${bg} border ${border} rounded-lg p-4 my-6 flex gap-3`}>
      <Icon className={`${iconColor} flex-shrink-0 mt-1`} size={20} />
      <div className={`${textColor} text-sm leading-relaxed`}>{children}</div>
    </div>
  )
}
