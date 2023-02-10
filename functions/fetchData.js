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
              logoImg {
                node {
                  mediaDetails {
                    sizes {
                      file
                      width
                      height
                      sourceUrl
                    }
                  }
                }
              }
              parallaxImg {
                node {
                  sourceUrl
                }
              }
              reserveImg {
                node {
                  sizes
                  sourceUrl
                }
              }
              reserveTextEng
              reserveTextEsp
              local1Link
              local1Name
              local2Link
              local2Name
            }
          }
        }`
    }


  const resJson = await graphqlRequest(query);
  // console.log(resJson.data.content.nodes);

  const homepageData = resJson.data.contents;

  return homepageData;

}