import { IconProps } from './IconTypes'

function MailboxNavIcon({ color, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color.firstColor}
      viewBox="0 0 24 24"
    >
      <path d="M8 4a5 5 0 00-5 5v9H1v2h20a2 2 0 002-2V9a5 5 0 00-5-5H8m0 2a3 3 0 013 3v9H5V9a3 3 0 013-3m6 5h6v4h-2v-2h-4v-2z"></path>
    </svg>
  )
}

export default MailboxNavIcon
