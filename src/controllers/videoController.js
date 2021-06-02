export const trending = (req, res) => {
    const videos = [
        {
            title: "A",
            rating: 1,
            comments:0,
            createdAt: "1 minutes ago",
            views: 10,
            id: 1
        },
        {
            title: "B",
            rating: 2,
            comments:0,
            createdAt: "3 minutes ago",
            views: 10,
            id: 2
        },
        {
            title: "C",
            rating: 3,
            comments:0,
            createdAt: "5 minutes ago",
            views: 10,
            id: 3
        }
    ];
    return res.render("home", {pageTitle: "Home", videos});
}
export const see = (req, res) => {
    res.render("watch", {pageTitle: "Watch"});
}
export const edit = (req, res) => {
    res.render("edit", {pageTitle: "Edit"});
}
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    return res.send("Delete Video");
}
