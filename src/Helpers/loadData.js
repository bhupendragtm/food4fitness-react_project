import "isomorphic-fetch";

function renderSwitch(param) {
  switch (param) {
    case "/":
      return "/home";
    default:
      return param;
  }
}
export default (resourceType) => {
  console.log(resourceType);
  let resource = renderSwitch(resourceType);
  console.log(resource);
  console.log(`http://wp.wdnexus.com/wp-json/wp/v2/${resource}`);
  return fetch(`http://wp.wdnexus.com/wp-json/wp/v2/${resource}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // only keep 10 first results
      return data;
    });
};
