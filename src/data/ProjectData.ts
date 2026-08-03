export default class ProjectData {
    id: string;
    name: string;
    iconUrl: string; // used as thumnail
    htmlDescription: string;
    tool: string; // programming language used in the project
    accentColor: string; // color of title bar 
    isHigh: boolean; // thumbnail will take 2 rows in the grid view
    isWide: boolean; // thumbnail will take 2 cols in the grid view

    constructor(id: string, name: string, iconUrl: string, html: string, accentColor = "#000000", tool = "", isHigh = false, isWide = false) {
        this.id = id;
        this.name = name;
        this.iconUrl = iconUrl;
        this.htmlDescription = html;
        this.accentColor = accentColor;
        this.tool = tool;
        this.isHigh = isHigh;
        this.isWide = isWide;
    }
}