import React, { lazy, useEffect, useState } from 'react';
import { loadRemote } from '@module-federation/runtime';

interface UseRemoteModuleResult {
  loading: boolean;
  error: Error | null;
  Component: React.ComponentType<any> | null;
}

interface UseRemoteModuleProps {
  name: string;
  path?: string;
}

// fetched and returns component from module federation remote module
const useRemoteModule = ({ name }: UseRemoteModuleProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(
    null
  );

  useEffect(() => {
    const loadModule = async () => {
      if (!name) {
        setLoading(false);
        setError(new Error(`Invalid remote module config: scope=${name}`));
        return;
      }
      try {
        setLoading(true);
        setError(null);
        // @ts-expect-error expected error
        const Module = lazy(() => loadRemote(`${name}/Module`));

        // if (Module) setComponent(Module.default);
        if (Module) setComponent(Module);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(`Error loading ${name} module`);
        setError(error instanceof Error ? error : new Error(String(error)));
      }
    };

    loadModule();
  }, []);

  return { Component, loading, error };
};

export default useRemoteModule;
