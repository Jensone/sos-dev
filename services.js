// use fetch to connect a local json file

// fetch the data from the json file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // do something with the data
        console.log(data);
    }
);

// use Notion API to connect to a Notion page
// https://developers.notion.com/reference/get-database
