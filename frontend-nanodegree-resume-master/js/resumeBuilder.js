/* 1 	Reference Udacity's screenshot of resume
   		a. http://i.imgur.com/pWU1Xbl.png
   2.   Project specifications 
   		a. https://review.udacity.com/#!/rubrics/13/view
   3. 	Metrics by shint.com:
		a. There are 6 functions in this file.
		b. Function with the largest signature take 1 arguments, while the median is 0.
		c. Largest function has 25 statements in it, while the median is 12.5.
		d. The most complex function has a cyclomatic complexity value of 5 while the median is 2.5.
		e. All undefined were due to NOT being in resumeBuilder.js file
		f. "Unused vatiable": locationizer 
	4.  Beautification applied by http://jsbeautifier.org/
		a. HTML and CSS was uncommented as per instructions

*/
//BIO Data
var skills = [
    "Intro to Programming Doer",
    "Front End Novice",
    "Full Stack Know-it-None",
    "Quality Assurance"
];

var bio = {
    "name": "Jav Enger",
    "role": "Intro to Programming Student",
    "contacts": {
        "mobile": "562.562.5625",
        "email": "javenger@gmail.com",
        "github": "javenger",
        "twitter": "@javenger",
        "location": "Long Beach, CA"
    },
    "welcomeMessage": "Welcome to my Extracurricularized resume.",
    "skills": skills,
    "biopic": "images/me.jpg"
};


//BIO Format and Display
bio.display = function() {
//function displayBio() {
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formmattedbioName = HTMLheaderName.replace("%data%", bio.name);
    var formmattedbioRole = HTMLheaderRole.replace("%data%", bio.role);
    var formmattedbioWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    //BIO Header
    $("#header").prepend(formmattedbioRole);
    $("#header").prepend(formmattedbioName);
    $("#header").append(formmattedbioWelcomeMessage);
    $("#header").append(formattedbioPic);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
    }
};
bio.display();

//Education Data
var education = {
    "schools": [{
        "name": "DEVRY",
        "location": "Long Beach, CA",
        "degree": "Bachelors of Science",
        "majors": ["EET"],
        "dates": "2003-2005",
        "url": "http://devry.com"
    }],
    "onlineCourses": [{
            "title": "Full Stack Developer",
            "school": "Udacity",
            "location": "Mountain View, CA",
            "degree": "Extracurricular",
            "dates": "March 2018 - Current",
            "url": "http://udacity.com"
        },
        {
            "title": "Intro to Programming",
            "school": "Udacity",
            "location": "Mountain View, CA",
            "degree": "Nanodegree",
            "dates": "February 2017 - August 2017",
            "url": "http://udacity.com"
        }

    ]
};

//Education Format and Display (both School and Online Courses)
education.display = function() {
//function displayEducation() {
    //School Format and Display
    if (education.schools.length > 0) {
        for (var school = 0; school < education.schools.length; school++) {
        //for (school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedNameDegree = formattedSchoolName + formattedschoolDegree;
            $(".education-entry:last").append(formattedNameDegree);
            //$(".education-entry:last").append(formattedSchoolName);

            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedLocation);


            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[school]);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }
    //Online Course Format and Display
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);

        for (var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
            //for (onlineCourse in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
            var formattedOnlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
            var formattedOnlineCourseTitleSchool = formattedOnlineCourseTitle + formattedOnlineCourseSchool;
            $(".education-entry:last").append(formattedOnlineCourseTitleSchool);
            //$(".education-entry:last").append(formattedOnlineCourseTitle);

            var formattedOnlineCourseDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
            $(".education-entry:last").append(formattedOnlineCourseDate);

            var formattedOnlineCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
            $(".education-entry:last").append(formattedOnlineCourseURL);
        }
    }
};
education.display();
//displayEducation();

//Contacts Format and Display at Top and Bottom
bio.contacts.display = function() {
//function displayContacts() {
    if (bio.skills.length > 0) {
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);

        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);
    }
};
bio.contacts.display();
//displayContacts();

//Work Data
var work = {
    "jobs": [{
            "employer": "DIRECTV",
            "location": "El Segundo, CA",
            "title": "Tools Development Lead",
            "description": "Work closely together with team to support testing teams improve efficiency in STB software certification.",
            "dates": "September 2009 - Current"
        },
        {
            "employer": "Mitsubishi Electronics",
            "location": "Compton, CA",
            "title": "Repari Center Lead/Technician",
            "description": "Recertification/repiar of commercial viewing screens (LCDs, monitors, projectors).",
            "dates": "September 2006 - September 2009"
        }
    ]
};

//Work Format and Display
work.display = function() {
//function displayWork() {
    for (var job = 0; job < work.jobs.length; job++) {
        //for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        
        var formattedEmployerDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedEmployerDates);

        var formattedEmployerDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerDescription);

    }
};
work.display();
//displayWork();

// Project Data
var turtleArt = [
    "images/draw_flower.png",
    "images/draw_circle_with_squares.png",
    "images/draw_square_circle_triangle.png"
];

var projects = {
    "projects": [{
            "title": "Movie Website",
            "dates": "July 2017 - August 2017",
            "description": "Currated list of my favority movies and a posters gets clicked its movie trailer is played.",
            "images": ["images/MovieWebsite.jpg"]
        },
        {
            "title": "The Turtle is the Way",
            "dates": "June 2017 - July 2017",
            "description": "Created art using the Python's built-in feature Turtle.",
            "images": turtleArt
        }
    ]
};

//Project Format and Display
projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        //for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var projectProjectAttributes = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;
        $(".project-entry:last").append(projectProjectAttributes);

        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                //for (image in projects.projects[project].images) {
                var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImages);
            }
        }
    }
};
projects.display();


function locationizer(work_obj) {
    var locationArray = [];
    for (var job = 0; job < work_obj.jobs.length; job++) {
        //for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

// Show a map form web
$("#mapDiv").append(googleMap);