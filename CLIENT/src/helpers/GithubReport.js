const client = require('github-graphql-client');
const owner = 'IgnacioBarocchi';
const repo = 'Hackaton-pae-nq-';
const branchQuery = `
query($owner:String!, $name:String!, $branchCursor: String!) {
  repository(owner: $owner, name: $name) {
    refs(first: 100, refPrefix: "refs/heads/",after: $branchCursor) {
      totalCount
      edges {
        node {
          name
          target {
            ...on Commit {
              history(first:0){
                totalCount
              }
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}`;

function buildCommitQuery(branches) {
  var query = `
        query ($owner: String!, $name: String!) {
          repository(owner: $owner, name: $name) {`;
  for (var key in branches) {
    if (branches.hasOwnProperty(key) && branches[key].hasNextPage) {
      query += `
            ${key}: ref(qualifiedName: "${branches[key].name}") {
              target {
                ... on Commit {
                  history(first: 100, after: ${
                    branches[key].cursor
                      ? '"' + branches[key].cursor + '"'
                      : null
                  }) {
                    ...CommitFragment
                  }
                }
              }
            }`;
    }
  }
  query += `
          }
        }`;
  query += commitFragment;
  return query;
}

const commitFragment = `
fragment CommitFragment on CommitHistoryConnection {
  totalCount
  nodes {
    oid
    message
    committedDate
    author {
      name
      email
    }
  }
  pageInfo {
    hasNextPage
    endCursor
  }
}`;

function doRequest(query, variables) {
  return new Promise(function (resolve, reject) {
    client(
      {
        token: import('./utils/key'),
        query: query,
        variables: variables,
      },
      function (err, res) {
        if (!err) {
          resolve(res);
        } else {
          // console.log(JSON.stringify(err, null, 2));
          reject(err);
        }
      }
    );
  });
}

function buildBranchObject(branch) {
  var refs = {};

  for (var i = 0; i < branch.length; i++) {
    // console.log("branch " + branch[i].node.name);
    refs['branch' + i] = {
      name: branch[i].node.name,
      totalCount: branch[i].node.target.history.totalCount,
      cursor: null,
      hasNextPage: true,
      commits: [],
    };
  }
  return refs;
}

export async function requestGraphql() {
  var iterateBranch = true;
  var branches = [];
  var cursor = '';

  // get all branches
  while (iterateBranch) {
    let res = await doRequest(branchQuery, {
      owner: owner,
      name: repo,
      branchCursor: cursor,
    });
    iterateBranch = res.data.repository.refs.pageInfo.hasNextPage;
    cursor = res.data.repository.refs.pageInfo.endCursor;
    branches = branches.concat(res.data.repository.refs.edges);
  }

  //split the branch array into smaller array of 19 items
  var refChunk = [],
    size = 19;

  while (branches.length > 0) {
    refChunk.push(branches.splice(0, size));
  }

  for (var j = 0; j < refChunk.length; j++) {
    //1) store branches in a format that makes it easy to concat commit when receiving the query result
    var refs = buildBranchObject(refChunk[j]);

    //2) query commits while there are some pages existing. Note that branches that don't have pages are not
    //added in subsequent request. When there are no more page, the loop exit
    var hasNextPage = true;
    var count = 0;

    while (hasNextPage) {
      var commitQuery = buildCommitQuery(refs);
      // console.log("request : " + count);
      let commitResult = await doRequest(commitQuery, {
        owner: owner,
        name: repo,
      });
      hasNextPage = false;
      for (var key in refs) {
        if (
          refs.hasOwnProperty(key) &&
          commitResult.data.repository[key]
        ) {
          // isEmpty = false;
          let history =
            commitResult.data.repository[key].target.history;
          refs[key].commits = refs[key].commits.concat(history.nodes);
          refs[key].cursor = history.pageInfo.hasNextPage
            ? history.pageInfo.endCursor
            : '';
          refs[key].hasNextPage = history.pageInfo.hasNextPage;
          // ref
          /*
          console.log(
            key +
              " : " +
              refs[key].commits.length +
              "/" +
              refs[key].totalCount +
              " : " +
              refs[key].hasNextPage +
              " : " +
              refs[key].cursor +
              " : " +
              refs[key].name
          );
*/
          if (refs[key].hasNextPage) {
            hasNextPage = true;
          }
        }
      }
      count++;
      // console.log("------------------------------------");
    }
    for (var key in refs) {
      if (refs.hasOwnProperty(key)) {
        /*
        console.log(
          refs[key].totalCount +
            " : " +
            refs[key].commits.length + //commits length. I should iterate trhough the array of objects with the info of the commits.
            " : " +
            refs[key].name
        );
        */
      }
    }
  }
  // return
  // localStorage.setItem('gh',"commits" + j + ".json", JSON.stringify(refs, null, 4), "utf8")
  localStorage.setItem('GitHub-repo', JSON.stringify(refs));
}
