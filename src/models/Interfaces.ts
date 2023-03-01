export interface IPhoto {
    id: string,
    created_at: string,
    alt_description: string,
    urls: {
        full: string,
        regular: string,
        small: string,
        thumb: string
    },
    links: {
        self: string,
        html: string,
        download: string,
        download_location: string
    }
};

export interface IPhotoState {
    photos: IPhoto[],
    loading: boolean,
    error: Error | null
};


