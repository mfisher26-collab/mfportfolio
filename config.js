// ========================================
// PORTFOLIO CONFIGURATION
// ========================================
// Edit this file to update your portfolio content

// PROFILE INFORMATION
const profileConfig = {
    // Edit the bio text below
    bio: `I am a journalist with experience reporting on local community issues and campus life. I have published news and feature articles for The Amherst Student and written news releases for the Amherst College Alumni magazine.
I am seeking internships and entry-level roles that allow me to continue developing as a reporter and contribute meaningful work to a newspaper or other journalistic organization.
`
};

// ARTICLES AND ESSAYS
// To add a new article, copy the template below and add it to the array
const articles = [
    {
        title: "Amherst Houselessness: Resources On and Off Campus",
        publication: "The Amherst Student",
        url: "https://amherststudent.com/article/amherst-houselessness-resources-on-and-of-campus/",
        description: "A feature examining homelessness in Amherst, outlining local resources, and exploring how students and residents interact with existing support systems.",
        image: "article_imgs/article1.png"
    },
    {
        title: "UT Research Foundation sues AI firm Anthropic for alleged patent infringement",
        publication: "WBIR",
        url: "https://www.wbir.com/article/news/local/knoxville/university-of-tennessee-research-foundation-sues-anthropic/51-cf5be97b-f597-4170-b7ed-1d749dc88570",
        description: "UTRF, which is closely connected to the University of Tennessee, claims the AI giant stole its inventions and violated its patent rights",
        image: "article_imgs/article10newimg.jpg"
    },
    {
        title: "'It's an insult to the people of Tennessee' | Death penalty expert reacts to failed execution",
        publication: "WBIR",
        url: "https://www.wbir.com/article/news/crime/christa-pike/its-an-insult-to-the-people-of-tennessee-death-penalty-expert-reacts-to-failed-execution/51-23962c4a-8684-46f3-ae64-bdcd0287e569",
        description: "A professor who studied botched executions said Christa Pike was the first person to receive lethal injection drugs and survive.",
        image: "article_imgs/article11.jpg"
    },
    {
        title: "US Forest Service plan could affect up to 85,000 acres of Tennessee land",
        publication: "WBIR",
        url: "https://www.wbir.com/article/tech/science/environment/us-forest-service-plan-could-affect-up-85000-acres-tennessee-land/51-88fb5ba4-db69-495d-84bf-59a39585a168",
        description: "The U.S. Forest Service is moving forward with a plan that could rescind the 2001 Roadless Rule.",
        image: "article_imgs/article13.jpg"
        
    }, 
    {
        title: "Sixth Circuit Court strikes down Tennessee law criminalizing abortion assistance to minors",
        publication: "WBIR",
        url: "https://www.wbir.com/article/news/politics/national-politics/sixth-circuit-court-strikes-down-tennessee-law-criminalizing-abortion-assistance-minors/51-eb95d01d-15e8-4be6-a97d-0f4d78dfc271",
        description: "The Sixth Circuit blocked Tennessee's Recruitment Provision under the First Amendment, affecting abortion access information for minors.",
        image: "article_imgs/article14.jpg"    
    }, 
    {
        title: "Tennessee on list of 5 states to potentially host Nuclear Lifecycle Innovation program",
        publication: "WBIR",
        url: "https://www.wbir.com/article/news/local/nashville/tennessee-on-list-of-states-nuclear-lifecycle-innovation-program/51-43671595-feb8-4879-8073-d55a0c25b8b8",
        description: "Gov. Bill Lee announced Tennessee is a finalist to accept nuclear waste from around the country, but Sen. Heidi Campbell criticizes the decision.",
        image: "article_imgs/article15.jpg"    
    }, 
    {
        title: "GSMNP has 2nd most accidental deaths from 2014-2022, study finds",
        publication: "WBIR",
        url: "https://www.wbir.com/article/sports/outdoors/gsmnp-2nd-most-accidental-deaths-from-study-finds/51-b9346d7f-4c46-4a07-9134-a8dc3de48cd2",
        description: "The national park tallied 58 accidental deaths in the 8-year period, according to analysis from outdoor research organization Outforia.",
        image: "article_imgs/article12.jpg"
    },
    {
        title: "Civil War Tablets Exhibit Honors Black Soldiers' Legacy",
        publication: "The Amherst Student",
        url: "https://amherststudent.com/article/a-legacy-commemoration-civil-war-tablets/",
        description: "Coverage of a community exhibit honoring Black Civil War soldiers, situating local history within broader conversations about remembrance and historical visibility.",
        image: "article_imgs/article2.png"
    },
    {
        title: "Halloween Weekend Pink Out Rave Unites Student Body, Reduces Dorm Damage Cost",
        publication: "The Amherst Student",
        url: "https://amherststudent.com/article/halloween-weekend-pink-out-rave-unites-student-body-reduces-dorm-damage-cost/",
        description: "Reporting on a campus event aimed at strengthening the community while addressing its aftermath and concerns over student conduct and safety.",
        image: "article_imgs/article3.jpg"
    },
    {
        title: "Tell It Slant Poetry Festival",
        publication: "Amherst College News",
        url: "https://www.amherst.edu/news/news_releases/2025/october/tell-it-slant-poetry-festival",
        description: "News coverage of the annual poetry festival celebrating Emily Dickinson's legacy and contemporary poets through readings, workshops, and performances.",
        image: "article_imgs/article4.jpg"
    },
    {
        title: "Together We Rise: Remembering the Amherst Uprising",
        publication: "Amherst College News",
        url: "https://www.amherst.edu/news/news_releases/2025/december/together-we-rise",
        description: "Coverage of a commemoration reflecting on a multi-day sit-in in the library, and general reflection on activism and institutional change.",
        image: "article_imgs/article5.jpg"
    },
    {
        title: "Free Book Fair Supports Students and Sustainability",
        publication: "Amherst College News",
        url: "https://www.amherst.edu/news/news_releases/2025/november/free-book-fair",
        description: "Reporting on a free book fair focused on accessibility, reuse, and student support.",
        image: "article_imgs/article6.jpg"
    }, 
    {       
        title: "Local Lookout: Antonio’s Pizza",
        publication: "The Amherst Student",
        url: "https://amherststudent.com/article/local-lookout-antonios-pizza/",
        description: "Looking into how a town favorite establishment handles the late-night rush and the role it plays in the local community.",
        image: "article_imgs/article 7.png"
    }, 
    { 
        title: "Tandem Bagels To Return to Val Once a Month",
        publication: "The Amherst Student",
        url: "https://amherststudent.com/article/tandem-bagels-to-return-to-val-once-a-month/",
        description: "Investigating the changes in a controversial Dining Hall Policy as students voice their complaints.",
        image: "article_imgs/Article8.jpg"
    },  
    { 
        title: "Shoveling through the Storm: Custodial Perspectives",
        publication: "The Amherst Student",
        url: "https://amherststudent.com/article/shoveling-through-the-storm-highlighting-custodial-perspectives-2/",
        description: "Reporting on how custodial and grounds crews worked through the worst winter storm to hit the region in 20 years.",
        image: "article_imgs/article 9.jpg"
     }, 
    
        
    // Add more articles below following this format:
    // {
    //     title: "Your Article Title",
    //     publication: "Publication Name",
    //     url: "https://link-to-your-article.com",
    //     description: "A one-sentence description of your article.",
    //     image: "article_imgs/articleX.jpg"
    // },

    
];

// ========================================
// TEMPLATE FOR ADDING NEW ARTICLES
// ========================================
// Copy and paste this template, then fill in your information:
//
// {
//     title: "Article Title Here",
//     url: "https://publication.com/your-article",
//     description: "Brief description of your article goes here."
// },
