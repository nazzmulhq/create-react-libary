import type { FC, ReactNode } from 'react';
import './Card.css';

export interface CardProps {
  /** Card variant */
  variant?: 'elevated' | 'outlined' | 'filled';
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Enable hover effect */
  hoverable?: boolean;
  /** Card content */
  children: ReactNode;
  /** Additional class names */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

export const Card: FC<CardProps> = ({
  variant = 'elevated',
  padding = 'md',
  hoverable = false,
  children,
  className = '',
  onClick,
}) => {
  const classNames = [
    'lib-card',
    `lib-card--${variant}`,
    `lib-card--padding-${padding}`,
    hoverable ? 'lib-card--hoverable' : '',
    onClick ? 'lib-card--clickable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} onClick={onClick} role={onClick ? 'button' : undefined}>
      {children}
    </div>
  );
};

export interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  className?: string;
}

export const CardHeader: FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  className = '',
}) => (
  <div className={`lib-card__header ${className}`}>
    <div className="lib-card__header-content">
      <h3 className="lib-card__title">{title}</h3>
      {subtitle && <p className="lib-card__subtitle">{subtitle}</p>}
    </div>
    {action && <div className="lib-card__header-action">{action}</div>}
  </div>
);

export interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent: FC<CardContentProps> = ({ children, className = '' }) => (
  <div className={`lib-card__content ${className}`}>{children}</div>
);

export interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter: FC<CardFooterProps> = ({ children, className = '' }) => (
  <div className={`lib-card__footer ${className}`}>{children} ok</div>
);

export default Card;
