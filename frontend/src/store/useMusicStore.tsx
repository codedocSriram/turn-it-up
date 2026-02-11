import { axiosInstance } from "@/lib/axios";
import type { Album, Song } from "@/types";
import { create } from "zustand";

interface MusicStore {
    songs: Song[];
    albums: Album[];
    isLoading: boolean;
    error: string | null;
    currentAlbum: Album | null;
    madeForYouSongs: Song[];
    trendingSongs: Song[];
    featuredSongs: Song[];
    fetchAlbums: () => Promise<void>;
    fetchAlbumById: (id: string) => Promise<void>;
    fetchFeaturedSongs: () => Promise<void>;
    fetchMadeForYouSongs: () => Promise<void>;
    fetchTrendingSongs: () => Promise<void>;
}

export const useMusicStore = create<MusicStore>((set) => ({
    albums: [],
    songs: [],
    madeForYouSongs: [],
    trendingSongs: [],
    featuredSongs: [],
    isLoading: false,
    error: null,
    currentAlbum: null,
    fetchAlbums: async () => {
        try {
            set({ isLoading: true, error: null });
            const response = await axiosInstance.get("/albums");
            set({ albums: response.data });
        } catch (error: any) {
            set({ error: error.response?.data.message });
        } finally {
            set({ isLoading: false });
        }
    },

    fetchAlbumById: async (id) => {
        try {
            set({ isLoading: true, error: null });
            const response = await axiosInstance.get(`/albums/${id}`);
            set({ currentAlbum: response.data });
        } catch (error: any) {
            set({ error: error.response.data.message });
        } finally {
            set({ isLoading: false });
        }
    },

    fetchFeaturedSongs: async () => {
        try {
            set({ isLoading: true, error: null });
            const response = await axiosInstance.get("/songs/featured");
            set({ featuredSongs: response.data });
        } catch (error: any) {
            set({ error: error.response.data.message });
        } finally {
            set({ isLoading: false });
        }
    },

    fetchMadeForYouSongs: async () => {
        try {
            set({ isLoading: true, error: null });
            const response = await axiosInstance.get("/songs/made-for-you");
            set({ madeForYouSongs: response.data });
        } catch (error: any) {
            set({ error: error.response.data.message });
        } finally {
            set({ isLoading: false });
        }
    },

    fetchTrendingSongs: async () => {
        try {
            set({ isLoading: true, error: null });
            const response = await axiosInstance.get("/songs/trending");
            set({ trendingSongs: response.data });
        } catch (error: any) {
            set({ error: error.response.data.message });
        } finally {
            set({ isLoading: false });
        }
    },
}));
