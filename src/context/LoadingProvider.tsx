import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);

  // Auto-run progress on mount — no 3D model to wait for
  useEffect(() => {
    let percent = 0;
    const interval = setInterval(() => {
      percent += Math.round(Math.random() * 14 + 6);
      if (percent >= 100) {
        percent = 100;
        setLoading(100);
        clearInterval(interval);
      } else {
        setLoading(percent);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  const value = { isLoading, setIsLoading, setLoading };

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) throw new Error("useLoading must be used within a LoadingProvider");
  return context;
};
