import React, {createContext, useState, useContext, ReactNode} from 'react';

interface Photo {
  uri: string;
  width: number;
  height: number;
  type?: string;
  fileName?: string;
}

interface PhotoContextType {
  photos: Photo[];
  setPhotos: (photos: Photo[]) => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  return (
    <PhotoContext.Provider value={{photos, setPhotos}}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotoContext = () => {
  const context = useContext(PhotoContext);
  if (context === undefined) {
    throw new Error('usePhotoContext must be used within a PhotoProvider');
  }
  return context;
};
