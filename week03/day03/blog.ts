'use strict'
class BlogPost{

    authorName: string;
    title: string;
    text: string;
    publicationDate: string;

    post(title, authorName, publicationDate, text) :string {

        console.log(title + " titled by " + authorName + " posted at " + publicationDate + "\n" + "▫️ " +text + "\n");
        return this.title, this.text, this.publicationDate, this.authorName

    };

    constructor(title: string, authorName: string, publicationDate: string, text: string){
        this.title = title;
        this.authorName = authorName;
        this. publicationDate = publicationDate;
        this.text = text;
        
    }
}

let firstPost : BlogPost = new BlogPost("Lorem Ipsum", "John Doe", "2000.05.04", "Lorem ipsum dolor sit amet.");
let secondPost : BlogPost = new BlogPost("Wait but why", "Tim Urban", "2010.10.10", "A popular long-form, stick-figure-illustrated blog about almost everything.");
let thirdPost : BlogPost = new BlogPost("One Engineer Is Trying to Get IBM to Reckon With Trump", "William Turton", "2017.03.28","Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.");
firstPost.post("Lorem Ipsum", "John Doe", "2000.05.04", "Lorem ipsum dolor sit amet.");
secondPost.post("Wait but why", "Tim Urban", "2010.10.10", "A popular long-form, stick-figure-illustrated blog about almost everything.");
thirdPost.post("One Engineer Is Trying to Get IBM to Reckon With Trump", "William Turton", "2017.03.28", "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.");
