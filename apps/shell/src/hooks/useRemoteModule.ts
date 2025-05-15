import React, { lazy, useEffect, useState } from 'react';
import { loadRemote } from '@module-federation/runtime';

interface UseRemoteModuleProps {
  name: string;
  path?: string;
}

// Cache for loaded modules to prevent unnecessary refetching
const moduleCache: Record<string, Promise<any>> = {};

// fetched and returns component from module federation remote module
const useRemoteModule = ({ name }: UseRemoteModuleProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(
    null
  );

  useEffect(() => {
    const loadModule = async (Module: any) => {
      if (!name) {
        setLoading(false);
        setError(new Error(`Invalid remote module config: scope=${name}`));
        return;
      }

      if (name in moduleCache) {
        return moduleCache[name];
      }

      try {
        setLoading(true);
        setError(null);
        if (!Module) {
          // @ts-expect-error expected error
          Module = lazy(() => loadRemote(`${name}/Module`));
        }

        // if (Module) setComponent(Module.default);
        if (Module) setComponent(Module);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(`Error loading ${name} module`);
        setError(error instanceof Error ? error : new Error(String(error)));
      }
    };

    let Module;

    // Read from Cache if available
    if (name in moduleCache) {
      Module = moduleCache[name];
    }

    loadModule(Module);
  }, [name]);

  return { Component, loading, error };
};

export default useRemoteModule;
