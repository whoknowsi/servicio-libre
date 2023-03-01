type Props = {
  color: string
}

const MenuIcon = ({ color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={28}
      width={28}
      viewBox="0 0 56 56"
      xmlSpace="preserve"
      fill={color}
    >
      <path d="M28 0C12.561 0 0 12.561 0 28s12.561 28 28 28 28-12.561 28-28S43.439 0 28 0zm12 41H16a2 2 0 0 1 0-4h24a2 2 0 0 1 0 4zm0-11H16a2 2 0 0 1 0-4h24a2 2 0 0 1 0 4zm0-11H16a2 2 0 0 1 0-4h24a2 2 0 0 1 0 4z" />
    </svg>
  )
}

export default MenuIcon