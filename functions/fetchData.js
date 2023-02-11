import graphqlRequest from "./graphqlRequest"

// IF "pageQuery" IS FALSE, RETURN HOME PAGE DATA ONLY
export async function firstData( pageQuery=false ){

  const query = pageQuery ? pageQuery :{
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
            galleryImgs (first:50) {
              nodes {
                sourceUrl
                title
                srcSet
                sizes
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
                    name
                  }
                }
              }
            }
            parallaxImg {
              node {
                mediaDetails {
                  sizes {
                    width
                    sourceUrl
                    height
                    name
                  }
                }
              }
            }
            reserveImg {
              node {
                mediaDetails {
                  sizes {
                    width
                    sourceUrl
                    name
                    height
                  }
                }
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
            email
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
          }
        }
      }`
  }

  const resJson = await graphqlRequest(query);

  const homepageData = resJson.data.contents;

  return homepageData;

}