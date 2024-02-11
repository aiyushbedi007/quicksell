import {
    faBoxArchive,
    faCircleCheck,
    faCircleHalfStroke,
    faCircleXmark,
    faEllipsis,
    faCircleExclamation,
    faVolumeHigh,
    faVolumeLow,
    faVolumeOff,
    faHippo,
    faPaw,
    faFish,
    faDragon,
    faFrog,
    faSpider,
    faDove
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

export const URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

export const STATUS = [
    { id: "Backlog", title: "Backlog", count: 0, icon: faBoxArchive },
    { id: "Todo", title: "Todo", count: 0, icon: faCircle },
    {
        id: "In progress",
        title: "In Progress",
        count: 0,
        icon: faCircleHalfStroke,
    },
    { id: "Done", title: "Done", count: 0, icon: faCircleCheck },
    { id: "Cancelled", title: "Cancelled", count: 0, icon: faCircleXmark },
];
export const PRIORITY = [
    { id: 0, title: "No priority", count: 0, icon: faEllipsis },
    { id: 4, title: "Urgent", count: 0, icon: faCircleExclamation },
    { id: 3, title: "High", count: 0, icon: faVolumeHigh },
    { id: 2, title: "Medium", count: 0, icon: faVolumeLow },
    { id: 1, title: "Low", count: 0, icon: faVolumeOff },
];

export const ICONS = [faHippo, faPaw, faFish, faDragon, faFrog, faSpider, faDove]