// Layout components
export * from './layouts/layouts';
export { default as Header } from './layouts/header';
export { default as Footer } from './layouts/footer';

// Animation components
export * from './animation';

// Common page components
export * from './common';

// UI components
export { default as DropdownMenu } from './drop-menu/dropdown-menu';

// Re-export all types
export type { SpacingProps, LayoutProps } from './layouts/layouts';
export type { CustomMotion } from './animation';