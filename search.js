const searchBtn = document.getElementById("searchBtn");
const jobSearch = document.getElementById("jobSearch");


searchBtn.addEventListener("click", function(){

    let searchValue = jobSearch.value.toLowerCase().trim();


    const jobs = [

        {
            name: "healthcare",
            keywords: [
                "nurse",
                "registered nurse",
                "healthcare assistant",
                "care worker",
                "medical"
            ],
            page: "healthcare.html"
        },


        {
            name: "retail",
            keywords: [
                "retail",
                "sales assistant",
                "shop assistant",
                "customer assistant"
            ],
            page: "retail.html"
        },


        {
            name: "hospitality",
            keywords: [
                "chef",
                "waiter",
                "restaurant",
                "hotel",
                "hospitality"
            ],
            page: "hospitality.html"
        },


        {
            name: "driving",
            keywords: [
                "driver",
                "delivery driver",
                "warehouse",
                "logistics"
            ],
            page: "driving.html"
        },


        {
            name: "administration",
            keywords: [
                "administrator",
                "office",
                "admin",
                "receptionist"
            ],
            page: "administration.html"
        },


        {
            name: "education",
            keywords: [
                "teacher",
                "lecturer",
                "education",
                "learning"
            ],
            page: "education.html"
        },


        {
            name: "engineering",
            keywords: [
                "engineer",
                "technical",
                "mechanical"
            ],
            page: "engineering.html"
        },


        {
            name: "security",
            keywords: [
                "security",
                "guard",
                "public service"
            ],
            page: "security.html"
        },


        {
            name: "customer",
            keywords: [
                "customer service",
                "call centre",
                "support"
            ],
            page: "customer.html"
        },


        {
            name: "real estate",
            keywords: [
                "estate",
                "property",
                "real estate"
            ],
            page: "RealEstate.html"
        },


        {
            name: "IT",
            keywords: [
                "developer",
                "software",
                "IT",
                "technology"
            ],
            page: "IT.html"
        }

    ];



    let found = false;



    jobs.forEach(function(job){


        job.keywords.forEach(function(keyword){


            if(searchValue.includes(keyword)){

                window.location.href = job.page;

                found = true;

            }


        });


    });



    if(found === false){

        alert("Sorry, no jobs found. Try another job title.");

    }


});