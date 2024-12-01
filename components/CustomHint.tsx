// components/CustomHint.jsx
import { FiInfo, FiAlertCircle, FiXCircle, FiCheckCircle } from 'react-icons/fi'

export function CustomHint({ children, type = 'info' }) {
  const config = {
    info: {
      icon: <FiInfo />,
      borderColor: '#3498db',
      backgroundColor: '#1a365d',
      color: '#90cdf4'
    },
    warning: {
      icon: <FiAlertCircle />,
      borderColor: '#f1c40f',
      backgroundColor: '#443d05',
      color: '#fbd38d'
    },
    error: {
      icon: <FiXCircle />,
      borderColor: '#e74c3c',
      backgroundColor: '#4a2020',
      color: '#feb2b2'
    },
    success: {
      icon: <FiCheckCircle />,
      borderColor: '#2ecc71',
      backgroundColor: '#1c4532',
      color: '#9ae6b4'
    }
  }

  const { icon, borderColor, backgroundColor, color } = config[type]

  return (
    <div
      style={{
        padding: '1rem',
        margin: '1rem 0',
        borderLeft: `4px solid ${borderColor}`,
        backgroundColor,
        color,
        borderRadius: '0.375rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.5rem'
      }}
    >
      <div style={{ fontSize: '1.2em' }}>
        {icon}
      </div>
      <div>{children}</div>
    </div>
  )
}