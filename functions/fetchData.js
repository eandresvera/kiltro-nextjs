import graphqlRequest from "./graphqlRequest"

export async function firstData(){
    const query = {
        query: `query MyQuery2 {
          contents {
            nodes {
              cartImgs {
                nodes {
                  sourceUrl
                }
              }
              firstImage {
                node {
                  sourceUrl
                }
              }
              galleryImgs {
                nodes {
                  sourceUrl
                }
              }
              local1
              local1Link
              local2
              local2Link
              logoImg {
                node {
                  sourceUrl
                }
              }
              parallaxImg {
                node {
                  sourceUrl
                }
              }
            }
          }
        }`
    }


  const resJson = await graphqlRequest(query);
  // console.log(resJson.data.content.nodes);

  const homepageData = resJson.data.contents;

  return homepageData;

}