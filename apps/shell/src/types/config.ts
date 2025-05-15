import React from 'react';

export interface ModuleConfig {
  path: string;
  title: string;
}

export interface HeaderModuleConfig {
  [key: string]: ModuleConfig;
}

export interface LeftNavModuleConfig {
  [key: string]: ModuleConfig;
}

export interface SecondaryModuleConfig {
  [key: string]: ModuleConfig;
}

export interface UserPreferences {
  theme?: string;
  showNotifications?: boolean;
  language?: string;
  enabledFeatures?: string[];
  frequentlyVisited?: string[];
  layout?: string;
}

export interface AppConfig {
  headerConfig: HeaderModuleConfig[];
  leftNavConfig: LeftNavModuleConfig[];
  secondaryConfig: SecondaryModuleConfig[];
  userPreferences?: UserPreferences;
}

export interface MicroFrontendProps {
  scope: string;
  module?: string;
  [key: string]: any;
}

export interface RemoteModuleData {
  Module: {
    default?: React.ComponentType<any>;
    __isFallback?: boolean;
    [key: string]: any;
  };
}

export interface ConfigModule {
  scope: string;
  module: string;
  url: string;
  route?: string;
  isGlobal?: boolean;
  [key: string]: any;
}

export interface DynamicConfig {
  modules: ConfigModule[];
  routes: RouteConfig[];
  themes: ThemeConfig[];
  userPreferences: UserPreferences;
}

export interface RouteConfig {
  path: string;
  scope: string;
  module: string;
  exact?: boolean;
}

export interface ThemeConfig {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSize: string;
}
