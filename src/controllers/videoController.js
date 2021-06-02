let videos = [
    {
        title: "A",
        rating: 1,
        comments:0,
        createdAt: "1 minutes ago",
        views: 1,
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
        views: 20,
        id: 3
    }
];

export const trending = (req, res) => {
    return res.render("home", {pageTitle: "Home", videos});
}

export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("watch", {pageTitle: `Watching ${video.title}`, video});
}

export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("edit", {pageTitle: `Editing: ${video.title}`, video});
}

export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "Upload Video"});
}

export const postUpload = (req, res) => {
    const { title } = req.body;
    const newVideo = {
        title,
        rating: 3,
        comments:0,
        createdAt: "5 minutes ago",
        views: 20,
        id: videos.length + 1,
    }
    videos.push(newVideo);
    return res.redirect("/");
}