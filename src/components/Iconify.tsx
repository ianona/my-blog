import { Icon, IconProps } from '@iconify/react';
interface IconifyProps extends IconProps {
  icon: string
}
export default function Iconify({ icon, ...iconProps }: IconifyProps): JSX.Element {
  return <Icon icon={icon} pointerEvents="none" aria-label={icon} aria-labelledby={icon} name={icon} {...iconProps} />
}