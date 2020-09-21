"use strict";
// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.


function gitCommit(username) {
    return fetch(`https://api.github.com/users/${username}/events`,  {headers: {'Authorization': 'gitKey'}})
        .then(res => res.json())
        .then(events => {
            return events.filter(event => event.type === "PushEvent")[0].created_at;
        });
}

gitCommit('Caroline1986').then(date => {
    console.log(new Date(date).toDateString());
});


//or

function getGithubLastUserCommit(user) {
    return fetch(`https://api.github.com/search/commits?q=sort:committer-date+committer:${user}`, {
        headers: { //A query can contain any combination of search qualifiers supported on GitHub.com. The format of the search query is: q=SEARCH_KEYWORD_1+SEARCH_KEYWORD_N+QUALIFIER_1+QUALIFIER_N
            'Authorization': 'gitKey',
            'Accept': 'application/vnd.github.cloak-preview'//Note: The Commit Search API is currently available for developers to preview. During the preview period, the APIs may change without advance notice. Please see the blog post for full details.
            // To access the API you must provide a custom media type in the Accept header:
        }
    })
        .then(response => {
            console.log(response);
            return response;
        })
        .then(response => response.json())
        .then(res => {
            console.log(res);
            let commit = res['items'][0]['commit'];
            let repo = res['items'][0]['repository'];
            let commitInfo = {
                date: commit['committer']['date'],
                repository: repo['name'],
                repositoryOwner: repo['owner']['login']
            };
            return commitInfo;
        })
};

console.log(getGithubLastUserCommit('Caroline1986'));