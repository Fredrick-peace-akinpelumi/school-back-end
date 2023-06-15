const albumModel = require('../../model/albumModel')

const uploadAlbum = async (req, res) => {
    const { albumTitle, artist, track, cover, genre } = req.body;
    const checkTitle = await albumModel.findOne({albumTitle})
    const checkTracks = await albumModel.findOne({track})
    if (!albumTitle || !artist || !track || !cover || !genre) {
        return res.json({ message: "All fields are required" })
    } else if (checkTitle || checkTracks) {
        return res.send({ status: false, message: "This album already exists" })
    } else {
        const album = new albumModel({
            albumTitle,
            artist,
            track,
            cover,
            genre
        })
        try {
            await album.save();
            res.status(200).json({ message: "Album uploaded successfully", album })
        } catch (err) {
            res.status(500).json(err)
        }
    }

}

const getAlbumSongs = async (req, res) => {
    try {
        const allSongs = await albumModel.find();
        res.status(200).json(allSongs)
    } catch (err) {
        res.send({ message: err.message })
    }
}

module.exports = { uploadAlbum, getAlbumSongs }