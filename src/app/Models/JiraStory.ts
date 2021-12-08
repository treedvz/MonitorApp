export class JiraStory {
    keyid:String;
    summary:String;
    link:String;

    constructor(keyid:String="", summary:String="", link:String="") {
        this.keyid = keyid;
        this.summary = summary;
        this.link = link;
    }
}