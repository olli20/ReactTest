import {nanoid} from "nanoid";

const menuItems = [
    {
        id: nanoid(),
        to: "/",
        text: "Home"
    },
    {
        id: nanoid(),
        to: "/blog",
        text: "Blog"
    },
    {
        id: nanoid(),
        to: "/projects",
        text: "Projects"
    },
    {
        id: nanoid(),
        to: "/contact",
        text: "Contact"
    },
]

export default menuItems;