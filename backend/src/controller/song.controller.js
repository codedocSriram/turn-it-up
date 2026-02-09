import { Song } from "../models/song.model.js";

export const getAllSongs = async (req, res, next) => {
    try {
        const songs = await Song.find().sort({ createdAt: -1 });
        res.status(200).json(songs);
    } catch (error) {
        console.log("Error in getAllSongs:", error.message);
        next(error);
    }
};

export const getFeaturedSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            {
                $sample: { size: 6 },
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                },
            },
        ]); //getting 6 random songs from DB to show in featured component
        res.status(200).json(songs);
    } catch (error) {
        console.log("Error in getFeaturedSongs:", error.message);
        next(error);
    }
};

export const getMadeForYouSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            {
                $sample: { size: 4 },
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                },
            },
        ]); //getting 4 random songs from DB to show in MadeForYou component
        res.status(200).json(songs);
    } catch (error) {
        console.log("Error in getMadeForYouSongs:", error.message);
        next(error);
    }
};

export const getTrendingSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            {
                $sample: { size: 4 },
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                },
            },
        ]); //getting 4 random songs from DB to show in Trending component
        res.status(200).json(songs);
    } catch (error) {
        console.log("Error in getTrendingSongs:", error.message);
        next(error);
    }
};
