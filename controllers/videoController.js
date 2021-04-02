import { videos } from "../db"
import routes from "../routes"

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "search", searchingBy, videos });
};


export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Upload" });
}

export const postUpload = (req, res) => {
    const {
        body: {
            file,
            title,
            description
        }
    } = req;
    // To do: Upload and save video
    res.redirect(routes.videoDetail(324394));
};

export const videoDetail = (req, res) => res.render("videoDetail");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");