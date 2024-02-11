import {
    faHippo,
    faPaw,
    faFish,
    faDragon,
    faFrog,
    faSpider,
    faDove
} from "@fortawesome/free-solid-svg-icons";
import backIcon from "./circle-dashed-svgrepo-com.svg"
import checkIcon from "./icons8-checkmark.svg";
import cancelIcon from "./icons8-cross-mark.svg";
import progressIcon from "./icons8-waning-gibbous-26.png";
import todoIcon from "./icons8-circle-50.png"
import low from "./icons8-low-connection-24.png";
import medium from "./icons8-signal-med.png";
import high from "./icons8-signal-24.png";
import urgent from "./icons8-high-priority-30.png";
import elipsis from "./icons8-ellipsis-30.png";

export const URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

export const STATUS = [
    { id: "Backlog", title: "Backlog", count: 0, icon2: backIcon },
    { id: "Todo", title: "Todo", count: 0, icon2: todoIcon },
    {
        id: "In progress",
        title: "In Progress",
        count: 0,
        icon2: progressIcon,
    },
    { id: "Done", title: "Done", count: 0, icon2: checkIcon },
    { id: "Cancelled", title: "Cancelled", count: 0, icon2: cancelIcon },
];
export const PRIORITY = [
    { id: 0, title: "No priority", count: 0, icon2: elipsis },
    { id: 4, title: "Urgent", count: 0, icon2: urgent },
    { id: 3, title: "High", count: 0, icon2: high },
    { id: 2, title: "Medium", count: 0, icon2: medium },
    { id: 1, title: "Low", count: 0, icon2: low },
];

export const ICONS = [faHippo, faPaw, faFish, faDragon, faFrog, faSpider, faDove]