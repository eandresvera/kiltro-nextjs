import graphqlRequest from "./graphqlRequest"

// IF "pageQuery" IS FALSE, RETURN HOME PAGE DATA ONLY
export async function fetchData( pageQuery=false ){

  const query = pageQuery 
  ? 
  pageQuery 
  :
  {
    query: `query MyQuery2 {
      contents {
        nodes {
          cartImgs {
            nodes {
              sourceUrl
            }
          }
          firstImg {
            node {
              title
              srcSet
              sourceUrl
              sizes
            }
          }
          galleryImgs(first: 50) {
            nodes {
              sourceUrl
              title
              srcSet
              sizes
            }
          }
          logoImg {
            node {
              sizes
              sourceUrl
              title
              srcSet
            }
          }
          parallaxImg {
            node {
              title
              srcSet
              sizes
              sourceUrl
            }
          }
          reserveImg {
            node {
              title
              srcSet
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
          contactTextEnglish
          contactTextSpanish
          galleryTextEsp(format: RENDERED)
          galleryTextEng(format: RENDERED)
          firstMiniImg {
            node {
              title
              srcSet
              sizes
              sourceUrl
            }
          }
          emailLocal1
          emailLocal2
          facebook
          instagram
          tAdvisor
          twitter
        }
      }
    }`
  }

  const resJson = await graphqlRequest(query);

  const homepageData = resJson.data.contents;

  return homepageData;

}